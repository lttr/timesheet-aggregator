<script lang="ts" setup>
const supabase = useSupabaseClient()

const login = async () => {
	const { error } = await supabase.auth.signInWithOAuth({
		provider: "github",
	})

	if (error) {
		console.error(error)
	}
}
</script>

<template>
	<div>
		<h2>Login</h2>
		<button @click="login">Log in with GitHub</button>
	</div>
</template>

<style lang="scss" scoped></style>
