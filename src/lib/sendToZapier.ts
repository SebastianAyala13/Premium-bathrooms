export async function sendToZapier(data: Record<string, unknown>): Promise<void> {
  const url = process.env.ZAPIER_HOOK_URL as string | undefined;
  const secret = process.env.ZAPIER_SECRET as string | undefined;
  
  if (!url || !secret) {
    throw new Error('ZAPIER env vars missing');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      'x-zapier-secret': secret 
    },
    body: JSON.stringify(data),
    next: { revalidate: 0 },
  });
  
  const text = await response.text();
  
  if (!response.ok) {
    throw new Error(`Zapier ${response.status}: ${text}`);
  }
}
