<script lang="ts" setup>
import { ref } from "vue"
const abc = ref("a")
</script>

<template>
	<button class="button" :class="abc">
		<slot />
	</button>
</template>

<style scoped>
.button {
	display: inline-flex;
	white-space: nowrap;

	font-size: var(--font-size-fluid-1);
	font-weight: var(--font-weight-7);

	padding-left: var(--size-6);

	padding-right: var(--size-6);
	padding-top: var(--size-3);
	padding-bottom: var(--size-3);

	color: var(--blue-9);
	border: var(--border-size-2) solid var(--blue-5);
	background-color: transparent;
	border-radius: var(--radius-2);
}

.button:is(:hover, :focus) {
	cursor: pointer;
	color: var(--blue-0);
	background-color: var(--blue-5);
}

.light .button:is(:hover, :focus) {
	text-shadow: 0 1px 0 var(--blue-8);
}

.button:active:not(.focus-visible) {
	position: relative;
	/*     inset-block-start: 2px; */
}

.button:active:not(:focus-visible) {
	position: relative;
	/*     inset-block-start: 2px; */
}

.dark .button {
	border-color: var(--blue-3);
	color: var(--blue-1);
}

.dark .button:hover {
	background-color: var(--blue-3);
	color: black;
}

@media (prefers-reduced-motion: no-preference) {
	.button:focus {
		-webkit-transition: outline-offset 0.25s ease;
		-o-transition: outline-offset 0.25s ease;
		transition: outline-offset 0.25s ease;
	}

	.button:focus:not(:active) {
		outline-offset: 5px;
	}
}
</style>
