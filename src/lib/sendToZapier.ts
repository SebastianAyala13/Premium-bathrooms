import { getZapierConfig } from './zapierConfig';

export async function sendToZapier(data: Record<string, unknown>): Promise<void> {
  const { url, secret } = getZapierConfig();
  
  console.log('Sending to Zapier:', { url, hasSecret: !!secret, data });

  try {
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
    console.log('Zapier response:', { status: response.status, text });
    
    if (!response.ok) {
      throw new Error(`Zapier ${response.status}: ${text}`);
    }
  } catch (error) {
    console.error('Zapier error:', error);
    throw error;
  }
}
