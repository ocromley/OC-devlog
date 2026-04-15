import { Router } from 'express'
import { prisma } from '../lib/prisma.js'

const router = Router()

// 1. GET /api/entries - List all entries (Read All)
router.get('/', async (_req, res) => {
  const entries = await prisma.entry.findMany({
    orderBy: { createdAt: 'desc' },
  })
  res.json(entries)
})

// 2. GET /api/entries/:id - Get a single entry (Read One)
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) {
    res.status(400).json({ error: 'id must be a number' })
    return // Return Early
  }

  const entry = await prisma.entry.findUnique({ where: { id } })
  if (!entry) {
    res.status(404).json({ error: 'Entry not found' })
    return // Return Early
  }
  res.json(entry)
})

// 3. POST /api/entries - Create a new entry (Create)
router.post('/', async (req, res) => {
  const { title, summary, mood, tags } = req.body

  if (!title || !summary || !mood) {
    res.status(400).json({ error: 'title, summary, and mood are required' })
    return // Return Early
  }

  const entry = await prisma.entry.create({
    data: {
      title: String(title),
      summary: String(summary),
      mood: String(mood),
      tags: String(tags ?? ''),
    },
  })
  res.status(201).json(entry)
})

// 4. PUT /api/entries/:id - Update an entry (Update)
router.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) {
    res.status(400).json({ error: 'id must be a number' })
    return // Return Early
  }

  const { title, summary, mood, tags } = req.body
  if (!title || !summary || !mood) {
    res.status(400).json({ error: 'title, summary, and mood are required' })
    return // Return Early
  }

  const existing = await prisma.entry.findUnique({ where: { id } })
  if (!existing) {
    res.status(404).json({ error: 'Entry not found' })
    return // Return Early
  }

  const entry = await prisma.entry.update({
    where: { id },
    data: {
      title: String(title),
      summary: String(summary),
      mood: String(mood),
      tags: String(tags ?? ''),
    },
  })
  res.json(entry)
})

// 5. DELETE /api/entries/:id - Delete an entry (Delete)
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) {
    res.status(400).json({ error: 'id must be a number' })
    return // Return Early
  }

  const existing = await prisma.entry.findUnique({ where: { id } })
  if (!existing) {
    res.status(404).json({ error: 'Entry not found' })
    return // Return Early
  }

  await prisma.entry.delete({ where: { id } })
  res.status(204).end() // 204 means "Success, but nothing left to show you"
})

export default router