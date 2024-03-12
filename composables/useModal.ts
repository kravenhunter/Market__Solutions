import { computed, ref } from "vue";

export const useModal = () => {
  const modal = ref(false);
  const openModaComputed = computed({
    get(): boolean {
      return modal.value;
    },
    set(newValue: boolean) {
      modal.value = newValue;
    },
  });

  function handlerModal(e: Event) {
    const getId = (e.target as HTMLDivElement).id;
    if (getId === "modal__wrapper") {
      openModaComputed.value = false;
    }
  }

  return { openModaComputed, handlerModal };
};
