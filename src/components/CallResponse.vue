<script setup lang="ts"></script>
<template>
	<div class="bg-zinc-800 whitespace-pre p-2 font-mono">
		{{
			JSON.stringify(
				{
					test: 33,
					thing: { item: 22 },
				},
				null,
				2
			)
		}}
	</div>
</template>

<style scoped></style>
