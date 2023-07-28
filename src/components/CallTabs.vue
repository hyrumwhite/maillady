<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useWorkspaceStore } from "../composables/useWorkspace";
const { currentTab } = storeToRefs(useWorkspaceStore());
import CallHeaders from "@/components/CallHeaders.vue";
import CallPayload from "@/components/CallPayload.vue";
import CallResponse from "@/components/CallResponse.vue";
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
