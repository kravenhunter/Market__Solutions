<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps({
  name: {
    type: String,
    default: "mdi-light:home",
  },
  color: {
    type: String,
    default: "black",
  },
  width: {
    type: String,
    default: "35",
  },
  bgColor: {
    type: String,
    default: "black",
  },
});
</script>

<template>
  <Icon :icon="name" :color="color" :width="width" />
</template>

<style scoped lang="scss">
.icon-hover-white {
  transition: all 300ms;
  &:hover {
    background-color: var(--white-color);
    stroke: black;
  }
}
.bg-light-green {
  background-color: var(--light-green);
}
.bg-black {
  background-color: var(--black);
}
.bg-white {
  background-color: var(--white-color);
}
.rounded {
  border-radius: 50%;
  padding: 7px;
  border: 1px solid black;
}
</style>
