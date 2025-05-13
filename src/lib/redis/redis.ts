/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { createClient } from 'redis';

const redis = createClient();

redis.on('error', (err) => console.error('Redis connection error:', err));

redis.connect();

export default redis;
