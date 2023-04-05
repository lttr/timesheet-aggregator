export default defineNuxtRouteMiddleware(() => {
	const user = useSupabaseUser()
	if (user) {
		return
	}
	return navigateTo("/login")
})
