<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useWorkspaceStore } from "../composables/useWorkspace";
const { currentTab } = storeToRefs(useWorkspaceStore());
import CallHeaders from "./CallHeaders.vue";
import CallPayload from "./CallPayload.vue";
import CallResponse from "./CallResponse.vue";
const currentComponent = computed(() => {
	if (currentTab.value.subview === "headers") {
		return CallHeaders;
	} else if (currentTab.value.subview === "response") {
		return CallResponse;
	} else {
		return CallPayload;
	}
});
</script>
<template>
	<component :is="currentComponent" />
</template>

<style scoped></style>
