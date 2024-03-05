<script setup lang="ts">
interface ISHowCase {
  title: string;
  content: string;
  image: string;
}
interface IProps {
  showcase: ISHowCase;
}

defineProps<IProps>();
</script>

<template>
  <li>
    <NuxtImg :src="showcase.image" :alt="showcase.title" />
    <h4>{{ showcase.title }}</h4>
    <p>{{ showcase.content }}</p>
  </li>
</template>

<style scoped lang="scss"></style>
