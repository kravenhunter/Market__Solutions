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
    default: "30",
  },
});
</script>

<template>
  <Icon :icon="name" :color="color" :width="width" />
</template>

<style scoped></style>
