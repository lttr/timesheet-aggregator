import { createEnv } from "@t3-oss/env-nuxt"
import { z } from "zod"

export const env = createEnv({
	server: {
		SUPABASE_KEY: z.string().min(1),
		SUPABASE_URL: z.string().url(),
	},
	client: {
		NUXT_PUBLIC_SPECIAL_URL: z.string().url(),
	},
})
