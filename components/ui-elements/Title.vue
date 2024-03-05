<script setup lang="ts">
defineProps({
  small: String,
  huge: String,
  colorHuge: {
    type: String,
    default: "white",
  },
  textPosition: {
    type: String,
    default: "center",
  },
  isSmallShow: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="titles">
    <h4 v-if="isSmallShow">{{ small }}</h4>
    <h2>{{ huge }}</h2>
  </div>
</template>

<style scoped lang="scss">
.titles {
  display: grid;
  row-gap: 2.4rem;
  text-align: v-bind(textPosition);
  & h4 {
    color: var(--light-green);
  }
  & h2 {
    color: v-bind(colorHuge);
  }
}
</style>
