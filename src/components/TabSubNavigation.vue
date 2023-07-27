<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useWorkspaceStore } from "../composables/useWorkspace";
import { useStoreValue } from "../composables/useStoreValue";
const workspaceStore = useWorkspaceStore();
const { currentTab } = storeToRefs(workspaceStore);
import { toRef } from "vue";
const subview = useStoreValue(
	toRef(currentTab.value.subview),
	workspaceStore.updateTabSubview
);

const activeClass =
	"underline underline-offset-4 decoration-fuchsia-500 decoration-2";
</script>
<template>
	<nav class="flex gap-2">
		<button
			@click="subview = 'headers'"
			:class="{
				[activeClass]: currentTab.subview === 'headers',
			}"
			>Headers</button
		>
		<button
			@click="subview = 'payload'"
			:class="{
				[activeClass]: currentTab.subview === 'payload',
			}"
			>Payload</button
		>
		<button
			@click="subview = 'response'"
			:class="{
				[activeClass]: currentTab.subview === 'response',
			}"
			>Response</button
		>
	</nav>
</template>

<style scoped></style>
