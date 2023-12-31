<script setup lang="ts">
import { watch, ref, toRef } from "vue";
import AppInput from "./AppInput.vue";

type Literal = boolean | string | number;
type JsonItem = {
	key: string | number;
	value: Literal | JsonItem | (Literal | JsonItem)[];
};
interface JsonBuilderProps {
	items: JsonItem[];
}
const props = withDefaults(defineProps<JsonBuilderProps>(), {
	items: () => [],
});
const emit = defineEmits(["update"]);

const localItems = ref<JsonItem[]>([]);
watch(
	() => props.items,
	() => {
		console.log([...props.items]);
		localItems.value = [...props.items];
	},
	{ deep: true, immediate: true }
);
const addRow = (index: number) => {
	if (index === localItems.value.length - 1) {
		localItems.value.push({ key: "", value: "" });
	}
};

const removeRow = (index: number) => localItems.value.splice(index, 1);
</script>
<template>
	<div class="px-2">
		<table>
			<thead>
				<tr>
					<th class="text-left">Key</th><th class="text-left">Value</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) of localItems" :key="index">
					<td
						><input
							class="text-black"
							v-model="item.key"
							@focus="addRow(index)"
					/></td>
					<td
						><input
							class="text-black"
							v-model="item.value"
							@focus="addRow(index)"
					/></td>
					<td><button @click="removeRow(index)">🗑</button></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped></style>
