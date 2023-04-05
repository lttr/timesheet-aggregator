<script lang="ts" setup>
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const name = computed(() => user.value?.user_metadata.full_name)
async function logout() {
	const { error } = await auth.signOut()
	if (error) {
		console.error(error)
	}
	await navigateTo("/login")
}
</script>

<template>
	<div v-if="user" class="card">
		user card
		<div class="username">{{ name }}</div>
		<button @click="logout">Log out</button>
	</div>
</template>

<style scoped>
.card {
	border: var(--border-size-1) solid var(--cyan-0);
}
</style>
