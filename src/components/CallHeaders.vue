<script setup lang="ts">
import { computed } from "vue";
import JsonBuilder from "@/components/JsonBuilder.vue";
import { useWorkspaceStore } from "@/composables/useWorkspace";
import { storeToRefs } from "pinia";
const workspaceStore = useWorkspaceStore();
const { currentTab } = storeToRefs(workspaceStore);
const headerItems = computed(() => {
	const headerItems = [];
	for (const header of currentTab.value.headers) {
		for (const key of Object.keys(header)) {
			headerItems.push({ key, value: header[key] });
		}
	}
	return headerItems;
});
</script>
<template>
	<div>
		Call Headers
		<JsonBuilder :items="headerItems" />
	</div>
</template>

<style scoped></style>
