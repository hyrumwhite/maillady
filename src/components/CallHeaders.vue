<script setup lang="ts">
import { computed } from "vue";
import JsonBuilder from "@/components/JsonBuilder.vue";
import { useWorkspaceStore } from "@/composables/useWorkspace";
import { storeToRefs } from "pinia";
const workspaceStore = useWorkspaceStore();
const { currentTab } = storeToRefs(workspaceStore);
const headerItems = computed(() => {
	return [...currentTab.value.headers];
});
</script>
<template>
	<div>
		Call Headers
		<JsonBuilder :items="headerItems" />
	</div>
</template>

<style scoped></style>
