<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useWorkspaceStore } from "../composables/useWorkspace";
import { useStoreValue } from "../composables/useStoreValue";
const workspaceStore = useWorkspaceStore();
const { updateTabUrl } = workspaceStore;
const { currentTabUrl } = storeToRefs(workspaceStore);
const urlModel = useStoreValue<string>(currentTabUrl, updateTabUrl);
</script>

<template>
	<form
		class="flex flex-1 border border-white rounded-md overflow-hidden"
		@submit.prevent
	>
		<select name="method" id="" class="text-black">
			<option>GET</option>
			<option>POST</option>
			<option>PATCH</option>
			<option>PUT</option>
			<option>DELETE</option>
		</select>
		<input
			v-model="urlModel"
			class="bg-transparent p-2 flex-[1_1_0px]"
			placeholder="https://api.com"
		/>
		<button type="submit" class="p-2">⏎ Send</button>
	</form>
</template>

<style scoped></style>
../composables/useWorkspace
