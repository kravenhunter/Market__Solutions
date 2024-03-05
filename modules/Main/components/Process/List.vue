<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import Item from "~/modules/Main/components/Process/Item.vue";

const process = [
  {
    title: "Ideate",
    content:
      "The ideation process is a crucial phase in the design process where creative thinking and brainstorming",
    icon: "jam:pen-f",
  },
  {
    title: "Reserach",
    content:
      "Research is a critical component of the design process, helping designers understand the problem",
    icon: "ant-design:ant-design-outlined",
  },
  {
    title: "Create",
    content:
      "Designing a process involves several key steps to ensure clarity, efficiency, successful implementation",
    icon: "fluent:speaker-2-28-regular",
  },
  {
    title: "Testing",
    content:
      "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements",
    icon: "mdi:paint-outline",
  },
];
</script>

<template>
  <div class="process__wrapper">
    <article class="process__wrapper__moves">
      <Title small="Process" huge="Process that moves things forward" color-huge="black" />

      <ul class="process__wrapper__moves__list">
        <Item
          v-for="{ title, content, icon } in process"
          :key="title"
          :title="title"
          :content="content"
          :icon="icon" />
      </ul>
    </article>
    <article class="process__wrapper__showcase"></article>
  </div>
</template>

<style scoped lang="scss">
.process__wrapper {
  padding: 10rem 0;
  display: grid;
  row-gap: 10rem;
  &__moves {
    width: 100%;
    display: grid;
    row-gap: 10rem;

    & .titles {
      width: min(100%, 676px);
      justify-self: center;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 10rem;
    }
  }
}
</style>
