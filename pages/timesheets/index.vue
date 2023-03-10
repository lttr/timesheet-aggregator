<script setup>
const data = useData()

useHead({
	title: `abc`,
})
</script>

<template>
	<h2>Timesheets</h2>
	<p>{{ data.foo }}</p>
</template>
