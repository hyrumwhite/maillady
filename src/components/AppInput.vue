<script lang="ts" setup>
const model = defineModel<string>({ local: true });
</script>
<template>
	<input
		class="bg-transparent border border-white rounded-md"
		v-model="model"
	/>
</template>
