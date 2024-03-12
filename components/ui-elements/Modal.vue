<script setup lang="ts">
defineProps({
  positionContent: {
    type: String,
    default: "content-center",
  },
  isActive: String,
});
</script>

<template>
  <div id="modal__wrapper" class="modal__wrapper" :class="positionContent">
    <div class="modal__wrapper__window" :class="isActive">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal__wrapper {
  position: fixed;
  inset: 0;
  background-color: var(--shadow);
  display: grid;
}
.content-center {
  place-content: center;
}
.content-end {
  & .modal__wrapper__window {
    position: absolute;
    top: 0;
    right: -30%;
    transition: right 300ms ease;
    &.burger__active {
      right: 0;
    }
  }
}
</style>
