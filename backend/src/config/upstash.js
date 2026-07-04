import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

// import dotenv from "dotenv"
console.log("URL:", process.env.UPSTASH_REDIS_REST_URL);
console.log("TOKEN:", process.env.UPSTASH_REDIS_REST_TOKEN);
// dotenv.config();

const ratelimit = new Ratelimit ({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit