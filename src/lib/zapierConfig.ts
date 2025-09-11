// Configuración de Zapier con fallback
export const ZAPIER_CONFIG = {
  HOOK_URL: process.env.ZAPIER_HOOK_URL || 'https://hooks.zapier.com/hooks/catch/22208931/udvjyvh/',
  SECRET: process.env.ZAPIER_SECRET || 'kjhdsbjkdsf9832jkhdsfkjhsf´+{32jkwekjwe'
};

export function getZapierConfig() {
  return {
    url: ZAPIER_CONFIG.HOOK_URL,
    secret: ZAPIER_CONFIG.SECRET
  };
}
