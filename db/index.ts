import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

import { env } from "@/env/server";

import * as schema from "./schema/index";

config({ path: ".env" }); // or .env.local

export const db = drizzle(env.DATABASE_URL, { schema });
