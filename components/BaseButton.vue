<script lang="ts" setup>
import { ref } from "vue"
const abc = ref("a")
</script>

<template>
	<button class="button" :class="abc">
		<slot />
	</button>
</template>
