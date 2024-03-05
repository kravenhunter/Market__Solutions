<script setup lang="ts">
interface IProps {
  title: string;
  content: string;
  icon: string;
}
defineProps<IProps>();
</script>

<template>
  <li class="process__wrapper__moves__list__item">
    <div class="process__wrapper__moves__list__item__title">
      <UiElementsIcon :name="icon" class="rounded bg-black" color="white" width="50" />
      <h4>{{ title }}</h4>
    </div>
    <small>{{ content }}</small>
  </li>
</template>

<style scoped lang="scss">
.process__wrapper__moves__list__item {
  width: min(100%, 270px);
  position: relative;
  padding: 3rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  color: black;

  &__title {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 2rem;
    top: -35%;
    & svg {
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
