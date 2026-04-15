const BASE = '/api';

export async function fetchEntries(tag?: string) {
  const url = tag ? `${BASE}/entries?tag=${encodeURIComponent(tag)}` : `${BASE}/entries`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchTags(): Promise<string[]> {
  const res = await fetch(`${BASE}/entries/tags`);
  return res.json();
}

// RESTORE THESE FUNCTIONS:
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