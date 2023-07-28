<script setup lang="ts">
import UrlInput from "@/components/UrlInput.vue";
import TabSubNavigation from "@/components/TabSubNavigation.vue";
import CallTabs from "@/components/CallTabs.vue";
</script>

<template>
	<div class="flex flex-col gap-3 flex-[1_1_0px]">
		<div class="flex">
			<select name="workspaces" id="" class="text-black">
				<option selected>Workspaces</option>
			</select>
			<button class="p-2 hover:bg-white/10">+</button>
		</div>
		<div class="p-2 pt-0 flex flex-col gap-3">
			<div class="flex gap-2">
				<UrlInput />
			</div>
			<div class="flex flex-col px-2">
				<TabSubNavigation />
			</div>
			<CallTabs />
		</div>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
