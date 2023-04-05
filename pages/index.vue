<script lang="ts" setup></script>

<template>
	<div>
		<h1 class="heading">Timesheet aggregator</h1>
		<NuxtLink to="/timesheets"> Timesheets </NuxtLink>
		<BaseButton>Foo</BaseButton>
		<UserCard />
	</div>
</template>

<style scoped>
.heading {
	font-size: var(--red-2);
}
</style>
