<script setup lang="ts">
interface IProps {
  alt?: string;
  image?: string;
}
defineProps<IProps>();
/* 
defineProps({
  alt: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  columDirection: {
    type: String,
    default: "row",
  },
}); */

/* withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
}) */
</script>

<template>
  <article class="card">
    <div class="card__details">
      <slot name="title"></slot>

      <UiElementsButton button-class="color__white">
        <UiElementsIcon name="oui:arrow-right" class="rounded bg-black" color="white" />
        <p class="trial">Расчитать стоимость</p>
      </UiElementsButton>
    </div>
    <slot name="cover"></slot>
    <div v-if="image && alt" class="card__cover">
      <NuxtImg :src="image" width="644" :alt="alt" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /*   display: flex;
  flex-direction: v-bind(columDirection); */
  /*   justify-content: space-between; */

  padding: 10rem 0;
  &__details {
    width: min(100%, 681px);
    & .titles {
      margin-bottom: 3rem;
    }
  }
}
</style>
