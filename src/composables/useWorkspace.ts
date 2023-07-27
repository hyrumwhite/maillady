import { defineStore } from "pinia";
import { computed, ref } from "vue";
type Workspace = {
	name: string;
	tabs: {
		url: string;
		subview: "headers" | "payload" | "response";
		method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
		headers: Record<string, string>[];
		payload: {
			contentType: string;
			body: string;
		};
		response: {
			contentType: string;
			body: string;
		};
	}[];
};
type Tab = Workspace["tabs"][number];
const createTab = (url: string): Tab => ({
	url,
	subview: "payload",
	method: "GET",
	headers: [],
	payload: {
		contentType: "application/json",
		body: "",
	},
	response: {
		contentType: "application/json",
		body: "",
	},
});
export const useWorkspaceStore = defineStore("workspace", () => {
	const workspaces = ref<Workspace[]>([]);
	const currentWorkspace = ref<Workspace | null>(null);
	const selectWorkspace = (index: number) =>
		(currentWorkspace.value = workspaces[index]);
	const addWorkspace = (name: string) => {
		workspaces.value.push({ name, tabs: [createTab("http://example.com")] });
	};
	const removeWorkspace = (index: number) => workspaces.value.splice(index, 1);
	const initialize = () => {
		addWorkspace("Workspace 1");
	};
	initialize();

	const currentTab = ref(createTab("http://example.com"));
	const selectTab = (index: number) =>
		(currentTab.value = currentWorkspace?.value.tabs[index]);
	const addTab = (url: string) =>
		currentWorkspace.value?.urls.push(createTab(url));
	const updateTabUrl = (url: string) => {
		if (currentTab.value) {
			currentTab.value.url = url;
		}
	};
	const updateTabSubview = (subview: Tab["subview"]) => {
		if (currentTab.value) {
			currentTab.value.subview = subview;
		}
	};
	const currentTabUrl = computed(() => currentTab.value.url);
	const removeTab = (index: number) =>
		currentWorkspace.value?.urls.splice(index, 1);

	const addHeader = (header: Record<string, string>) =>
		currentTab.value?.headers.push(header);
	const removeHeader = (index: number) =>
		currentTab.value?.headers.splice(index, 1);

	const updatePayload = ({ contentType = "application/json", body = "" }) => {
		if (currentTab.value) {
			currentTab.value.payload = {
				contentType,
				body,
			};
		}
	};

	const clearPayload = () => {
		if (currentTab.value) {
			currentTab.value.payload.body = "";
		}
	};

	return {
		workspaces,
		selectWorkspace,
		addWorkspace,
		removeWorkspace,
		currentTab,
		selectTab,
		addTab,
		removeTab,
		updateTabUrl,
		currentTabUrl,
		updateTabSubview,
		addHeader,
		removeHeader,
		updatePayload,
		clearPayload,
	};
});
