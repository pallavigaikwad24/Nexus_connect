import Redis from "ioredis";

const globalFromRedis = global as unknown as {
  redis: Redis | undefined;
};

export const redis =
  globalFromRedis.redis ??
  new Redis(process.env.REDIS_URL!, {
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
  });

if (process.env.NODE_ENV !== "production") {
  globalFromRedis.redis = redis;
}
