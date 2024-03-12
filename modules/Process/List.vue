<script setup lang="ts">
defineProps({
  isFlexWrap: {
    type: Boolean,
    default: true,
  },
  colorBorder: {
    type: String,
    default: "black",
  },
});
</script>

<template>
  <div class="process__wrapper">
    <article class="process__wrapper__moves">
      <div class="process__wrapper__moves__slot">
        <slot name="title"></slot>
      </div>

      <ul v-if="isFlexWrap" class="process__wrapper__moves__wrap">
        <slot name="list"></slot>
      </ul>
      <ul v-else class="process__wrapper__moves__column">
        <slot name="list"></slot>
      </ul>
    </article>
  </div>
</template>

<style scoped lang="scss">
.process__wrapper {
  display: grid;
  row-gap: 10rem;
  padding: 0 2rem;
  &__moves {
    width: 100%;
    display: grid;
    row-gap: 10rem;

    &__slot {
      width: min(100%, 676px);
      justify-self: center;
    }
    &__wrap {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      gap: 10rem;
    }
    &__column {
      display: grid;
      border-bottom: 1px solid v-bind(colorBorder);
    }
  }
}
</style>
