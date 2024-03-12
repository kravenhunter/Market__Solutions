<script setup lang="ts">
import type { PropType } from "vue";

interface IContent {
  title: string;
  content: string;
  image: string;
}
defineProps({
  item: Object as PropType<IContent>,

  bgColor: {
    type: String,
    default: "transparent",
  },
  nodeWidth: {
    type: String,
    default: "270px",
  },
  isColumnDirection: {
    type: Boolean,
    default: true,
  },
  colorText: {
    type: String,
    default: "black",
  },
  colorBorder: {
    type: String,
    default: "black",
  },
});
</script>

<template>
  <li v-if="item && isColumnDirection" class="process__wrapper__moves__list__grid">
    <div class="process__wrapper__moves__list__grid__title">
      <UiElementsIcon :name="item.image" class="rounded bg-black" color="white" width="50" />
      <slot name="title"></slot>
    </div>
    <pre>{{ item.content }}</pre>
  </li>
  <li v-else-if="item && !isColumnDirection" class="process__wrapper__moves__list__flex">
    <div class="process__wrapper__moves__list__flex__title">
      <slot name="title"></slot>
    </div>
    <pre>{{ item.content }}</pre>
  </li>
</template>

<style scoped lang="scss">
.process__wrapper__moves__list {
  &__grid,
  &__flex {
    display: grid;
    color: v-bind(colorText);
  }

  &__grid {
    max-width: min(100%, v-bind(nodeWidth));
    min-width: 394px;

    position: relative;

    padding: 8.5rem 3.4rem 3.4rem;
    background-color: v-bind(bgColor);

    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 25px;

    &__title {
      justify-self: center;
      position: absolute;
      display: grid;
      grid-template-columns: 50px 300px;
      align-items: center;

      column-gap: 2rem;
      top: -5%;
      & svg {
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
      }
    }
  }
  &__flex {
    border-top: 1px solid v-bind(colorBorder);
    padding: 4rem 0;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
