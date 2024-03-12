<script setup lang="ts">
interface IProps {
  image: string;
}
defineProps<IProps>();
</script>

<template>
  <div class="cover__item">
    <NuxtImg :src="image" fit="cover" />

    <div class="cover__item__title">
      <slot name="title" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover__item {
  width: min(100%, 393px);
  height: 294px;
  border-radius: 3%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 10;

  & img {
    position: absolute;
    inset: 0;
    z-index: -10;
    /* animation */
    scale: 1;
    transition: scale 500ms ease;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -5;
    width: 100%;
    height: 100%;
    background-color: black;
    /* animation */
    opacity: 0;
    transition: opacity 500ms ease;
  }
  &__title {
    padding: 2rem;
    position: absolute;
    inset: 0;
    /* animation */
    opacity: 0;
    transition: opacity 500ms ease;
  }

  &:hover {
    & img {
      scale: 1.3;
    }
    &::after {
      opacity: 0.6;
    }
    & .cover__item__title {
      opacity: 1;
    }
  }
}
</style>
