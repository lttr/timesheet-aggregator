<script setup>
const data = useData()

useHead({
	title: `abc`,
})
</script>

<template>
	<div>
		<h2>Timesheets</h2>
		<p>{{ data.foo }}</p>
	</div>
</template>
