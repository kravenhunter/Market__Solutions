import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2); // change ruls2 ruls2
	function increment() {
		count.value += 1; // change ruls1
	}

	return { count, doubleCount, increment };
});
