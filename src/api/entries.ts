// Define BASE at the very top so all functions can access it
const BASE = '/api';

export interface Entry {
  id: number;
  title: string;
  summary: string;   
  category: string;  
  mood: string;      
  tags: string[];    
  createdAt?: string;
}

// Interface for raw data coming from the database
export interface ApiEntry {
  id: number;
  title: string;
  summary: string;
  category: string;
  mood: string;
  tags: string; 
  createdAt: string;
  updatedAt: string;
}

export async function fetchEntries(tag?: string): Promise<any[]> {
  const url = tag ? `${BASE}/entries?tag=${encodeURIComponent(tag)}` : `${BASE}/entries`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchTags(): Promise<string[]> {
  const res = await fetch(`${BASE}/entries/tags`);
  return res.json();
}

export async function createEntry(data: any) {
  const res = await fetch(`${BASE}/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateEntry(id: number, data: any) {
  const res = await fetch(`${BASE}/entries/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteEntry(id: number) {
  await fetch(`${BASE}/entries/${id}`, { method: 'DELETE' });
}