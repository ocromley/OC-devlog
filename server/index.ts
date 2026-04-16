import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { prisma } from '../src/lib/prisma.js'
import entriesRouter from '../src/routes/entries.js'

// --- Startup guard -------------------------------------------
const required = ['CORS_ORIGIN', 'DATABASE_URL'] as const;
for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌ Missing required env var: ${key}`)
    process.exit(1)
  }
}

const app = express()
const PORT = process.env.PORT || 4000

// --- Middleware ----------------------------------------------
app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json())

// --- Routes --------------------------------------------------

/**
 * NEW: Endpoint to fetch unique tags for the frontend dropdown.
 * Placed BEFORE entriesRouter to avoid route conflicts.
 */
app.get('/api/entries/tags', async (_req: Request, res: Response) => {
  try {
    const entries = await prisma.entry.findMany({ select: { tags: true } })
    
    // Explicitly typing 'e' and 't' to satisfy TypeScript strict mode
    const allTags = entries.flatMap((e: { tags: string }) => 
      e.tags.split(',').map((t: string) => t.trim())
    );
    
    const uniqueTags = Array.from(new Set(allTags)).filter(Boolean).sort()
    res.json(uniqueTags)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tags' })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/health/ready', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ready', database: 'connected' })
  } catch (error) {
    console.error('Ready check failed:', error)
    res.status(503).json({ status: 'unavailable', database: 'disconnected' })
  }
})

// --- Mount Routers -------------------------------------------
app.use('/api/entries', entriesRouter)

// --- Global Error Handler ------------------------------------
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined 
  })
})

// --- Listen & Graceful Shutdown ------------------------------
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
  console.log(`🚀 Entries API: http://localhost:${PORT}/api/entries`)
})

process.on('SIGTERM', async () => {
  server.close(async () => {
    await prisma.$disconnect()
    console.log('HTTP server and DB connection closed')
  })
})