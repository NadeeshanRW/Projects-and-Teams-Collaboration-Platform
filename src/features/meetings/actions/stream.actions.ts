'use server';

import { StreamClient } from '@stream-io/node-sdk';
import { STREAM_API_KEY, STREAM_API_SECRET } from '../constants';

export const tokenProvider = async (userId: string) => {
  if (!STREAM_API_KEY) throw new Error('Stream API key is missing');
  if (!STREAM_API_SECRET) throw new Error('Stream API secret is missing');

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(userId, expirationTime, issuedAt);

  return token;
}; 