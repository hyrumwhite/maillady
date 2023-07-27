import { ComputedRef, Ref, computed } from "vue";

export const useStoreValue = <T>(
	storeValue: Ref<T> | ComputedRef<T>,
	setStoreValue: (value: T) => void
) => {
	return computed<T>({
		get() {
			return storeValue.value;
		},
		set(value) {
			setStoreValue(value);
		},
	});
};
