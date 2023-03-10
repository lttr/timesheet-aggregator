import OpenProps from "open-props"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@vueuse/nuxt"],
	postcss: {
		plugins: {
			"postcss-jit-props": OpenProps,
		},
	},
})
