<script setup lang="ts">
interface IComment {
  avatar: string;
  title: string;
  name: string;
  job?: string;
}

interface IProps {
  comment: IComment;
}
defineProps<IProps>();
</script>

<template>
  <article class="comments__list__item">
    <NuxtImg :src="comment.avatar" width="150" :alt="comment.name" />
    <strong>{{ comment.title }}</strong>
    <div class="comments__list__item__details">
      <p class="comments__list__item__details__name">{{ comment.name }}</p>
      <small class="comments__list__item__details__job">{{ comment.job }}</small>
    </div>
  </article>
</template>

<style scoped lang="scss">
.comments__list__item {
  display: grid;
  justify-items: center;
  row-gap: 3.5rem;
  color: black;

  text-align: center;
  & img {
    border-radius: 50%;
  }
  & strong {
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 25px;
  }
  &__details {
    &__name {
      font-family: var(--second-family);
      font-size: 2rem;
      font-weight: 600;
    }
    &__job {
      font-weight: 400;
      color: var(--light-black);
    }
  }
}
</style>
