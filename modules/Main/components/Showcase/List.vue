<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import ShowCaseItem from "~/modules/Main/components/Showcase/Item.vue";

const showcases = [
  {
    title: "Web UI design",
    content: "Creative  UI design",
    image: "/images/showcases/web_design.jpg",
  },
  {
    title: "To design Digital Strategy",
    content: "Social Media Marketing",
    image: "/images/showcases/strategy.jpg",
  },
  {
    title: "UI Design",
    content: "Creative Rebranding for logo",
    image: "/images/showcases/ui_design.jpg",
  },
  {
    title: "UI Logo Design",
    content: "Creative Rebranding for logo",
    image: "/images/showcases/logo_design.jpg",
  },
];
</script>

<template>
  <article class="showcases">
    <Title :is-small-show="false" huge="Recent Showcase" color-huge="black" />

    <div class="showcases__list">
      <ul class="showcases__list__first">
        <ShowCaseItem
          v-for="showcase in showcases.slice(0, 2)"
          :key="showcase.title"
          :showcase="showcase" />
      </ul>
      <ul class="showcases__list__second">
        <ShowCaseItem
          v-for="showcase in showcases.slice(2)"
          :key="showcase.title"
          :showcase="showcase" />
      </ul>
    </div>
  </article>
</template>

<style scoped lang="scss">
.showcases {
  display: grid;
  row-gap: 8.5rem;
  padding-bottom: 11rem;
  &__list {
    display: flex;
    align-items: flex-start;
    column-gap: 7rem;
    & ul {
      display: grid;
      row-gap: 8.8rem;
      & li {
        display: grid;
        row-gap: 1.6rem;
        color: black;
        & img {
          width: 100vw;
        }
      }
    }
    &__second {
      padding-top: 173px;
    }
  }
}
</style>
