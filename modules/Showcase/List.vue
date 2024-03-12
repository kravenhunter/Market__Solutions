<script setup lang="ts">
import ShowCaseItem from "~/modules/Showcase/Item.vue";
import { showcases } from "~/store/static__data";
</script>

<template>
  <article class="showcases">
    <slot name="title"></slot>
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
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 7rem;
    & ul {
      display: grid;
      row-gap: 8.8rem;
      & li {
        display: grid;
        row-gap: 1.6rem;
        color: black;
      }
    }
    &__second {
      padding-top: 173px;
    }
    @media (max-width: 1230px) {
      justify-content: center;
    }
  }
}
</style>
