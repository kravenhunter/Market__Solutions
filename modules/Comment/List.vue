<script setup lang="ts">
import CommentItem from "@/modules/Comment/Item.vue";
import { comments } from "~/store/static__data";
</script>

<template>
  <ul class="comments__list">
    <li v-for="comment in comments" :key="comment.id">
      <div class="">
        <CommentItem :comment="comment" />
        <div class="comments__list__pagination">
          <UiElementsIcon name="oui:arrow-left" class="rounded" color="black" />
          <UiElementsIcon name="oui:arrow-right" class="rounded bg-black" color="white" />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.comments__list {
  background-color: var(--light-grey);
  padding: 4.5rem;

  border-radius: 1rem;

  &__pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    column-gap: 1.1rem;
    & svg {
      cursor: pointer;
    }
  }
}
</style>
