/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import redis from './redis';

export interface RedisServiceSetKeyParams {
  key: string;
  value: string;
  exp: number;
}

interface RedisService {
  set: (params: RedisServiceSetKeyParams) => Promise<void>;
  get: (key: string) => Promise<string | null>;
  del: (key: string) => Promise<void>;
}

export default class RedisServiceImpl implements RedisService {
  async set(params: RedisServiceSetKeyParams): Promise<void> {
    const { key, value, exp } = params;
    await redis.set(key, value, {
      expiration: {
        type: 'EX',
        value: exp,
      },
    });
  }

  async get(key: string): Promise<string | null> {
    return await redis.get(key);
  }

  async del(key: string): Promise<void> {
    await redis.del(key);
  }
}
