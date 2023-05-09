<script lang="ts" setup></script>

<template>
	<div>
		<h1 class="heading">Timesheet aggregator</h1>
		<NuxtLink to="/timesheets"> Timesheets </NuxtLink>
		<BaseButton>Foo</BaseButton>
		<p class="one">Some text</p>
		<p class="two">Some text</p>
		<p class="three">Some text</p>
		<p class="four">Some text</p>
		<UserCard />
	</div>
</template>

<style scoped>
.heading {
	font-size: 2rem;
}

.one {
	font-size: var(--font-size-fluid-0);
}

.two {
	font-size: var(--font-size-fluid-1);
}

.three {
	font-size: var(--font-size-fluid-2);
}

.four {
	font-size: var(--font-size-fluid-3);
}
</style>
