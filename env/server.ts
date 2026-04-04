import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_URL: z.url(),
  },
  onValidationError: (issues) => {
    console.error("❌ Invalid environment variables:", issues.map((i) => i.path).flat());
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  /* eslint-disable n/no-process-env */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  /* eslint-enable n/no-process-env */
});
