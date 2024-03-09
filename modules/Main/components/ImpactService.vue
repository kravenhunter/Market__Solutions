<script setup lang="ts">
interface IService {
  title: string;
  content: string;
  image: string;
}
interface IProps {
  services: IService[];
}

defineProps<IProps>();
</script>

<template>
  <div class="digital__service">
    <div class="digital__service__titles">
      <slot name="title"></slot>
    </div>
    <div class="digital__service__list">
      <article
        v-for="{ title, content, image } in services"
        :key="title"
        class="digital__service__list__item">
        <UiElementsIcon :name="image" class="rounded bg-black" color="white" width="50" />
        <div class="digital__service__list__item__desctiption">
          <h5>{{ title }}</h5>
          <p>{{ content }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.digital__service {
  display: grid;
  row-gap: 8rem;
  color: var(--black);
  &__titles {
    width: min(100%, 695px);
    justify-self: center;
    text-align: center;
    display: grid;
    row-gap: 2.4rem;

    & h4 {
      color: var(--light-green);
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 6.6rem;
    row-gap: 8rem;
    &__item {
      display: grid;
      row-gap: 6.2rem;
      padding: 4.5rem;
      width: 422px;
      background-color: var(--light-grey);

      &__desctiption {
        display: grid;
        row-gap: 1.5rem;
      }
    }
  }
}
</style>
