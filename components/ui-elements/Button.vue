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
.color__white {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-radius: 50px;
  padding: 12px;
  color: var(--light-black);
  background-color: var(--white-color);
  border: 1px solid var(--light-black);
  transition: all 600ms;
  &:hover,
  &.router-link-active {
    color: var(--white-color);
    background-color: var(--light-black);
    border: 1px solid var(--white-color);
  }
}
.color__dark {
  color: var(--white-color);
  background-color: var(--light-black);
  &:hover,
  &.router-link-active {
    background-color: var(--color-dark-light);
  }
}
</style>
