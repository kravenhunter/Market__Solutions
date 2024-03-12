<script setup lang="ts">
interface IProps {
  alt?: string;
  image?: string;
  columDirection?: string;
}

withDefaults(defineProps<IProps>(), {
  columDirection: "row",
  // labels: () => ['one', 'two']
});
</script>

<template>
  <article class="card">
    <div class="card__details">
      <slot name="title"></slot>
      <slot name="button" />
    </div>

    <div class="card__cover">
      <NuxtImg v-if="image && alt" :src="image" width="644" :alt="alt" />
      <slot name="cover"></slot>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  /*   display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
  direction: rtl; */

  display: flex;
  flex-direction: v-bind(columDirection);
  justify-content: space-between;
  column-gap: 3rem;
  &__details {
    width: min(100%, 681px);
  }
  &__cover {
    width: min(100%, 644px);
  }
}
</style>
