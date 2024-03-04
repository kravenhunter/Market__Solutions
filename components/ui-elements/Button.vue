<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Title",
  },
  buttonClass: {
    type: String,
    default: "color__dark",
  },
  isButton: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "black",
  },
  linkPath: String,
});
</script>

<template>
  <button v-if="isButton" :class="buttonClass" type="button"><slot /></button>
  <NuxtLink v-else :to="linkPath" :class="buttonClass"> <slot /></NuxtLink>
</template>

<style scoped lang="scss">
.color__dark {
  color: white;
  background: var(--color-dark);
  &:hover,
  &.router-link-active {
    background: var(--color-dark-light);
  }
}
</style>
