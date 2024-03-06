import KanvasCore, { genericAuthMiddleware } from '@kanvas/core';
import { getCookie } from 'cookies-next';
const getKey = async (): Promise<string | null> => {
  return getCookie('token')?.toString() || null; // wherever you have saved the user token
};

export const client = new KanvasCore({
  url: 'https://graphapidev.kanvas.dev/graphql',
  key: '0dbe8cbf-5550-4bf3-9945-c4d19c774a29',
  middlewares: [genericAuthMiddleware(getKey)],
});
