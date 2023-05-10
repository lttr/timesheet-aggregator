import OpenProps from "open-props"
import "./env"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@vueuse/nuxt", "@nuxtjs/supabase"],
	css: ["@/assets/styles/main.css"],
	postcss: {
		plugins: {
			"postcss-jit-props": OpenProps,
		},
	},
})
