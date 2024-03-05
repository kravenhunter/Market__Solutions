<script setup lang="ts">
import BoostBusiness from "~/modules/Main/components/BoostBusiness.vue";
import BusinessGrow from "~/modules/Main/components/BusinessGrow.vue";
import CommentList from "~/modules/Main/components/Comment/List.vue";
import ImpactService from "~/modules/Main/components/ImpactService.vue";
import ProcessList from "~/modules/Main/components/Process/List.vue";
import ShowcaseList from "~/modules/Main/components/Showcase/List.vue";

interface ITodos {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const title = "Index Test";
const { data: products, error } = await useFetch<ITodos[]>(
  "https://jsonplaceholder.typicode.com/posts",
);

useSeoMeta({
  title: "Главная",
  ogTitle: "Главная",
});
</script>

<template>
  <div class="main__page">
    <section class="hero__section">
      <NuxtImg class="stars" src="/images/layout/stars.svg" width="183" alt="logo" />
      <BusinessGrow class="center__content" />
    </section>
    <section class="digital__section section__bg-white">
      <ImpactService class="center__content" />
    </section>
    <section class="boost__section">
      <BoostBusiness class="center__content" />
    </section>
    <section class="process__section section__bg-white">
      <ProcessList class="center__content" />
      <ShowcaseList class="center__content" />
      <CommentList class="center__content" />
    </section>
  </div>
</template>

<style scoped lang="scss">
.section__bg-white {
  background-color: var(--white-color);
}
section {
  & .center__content {
    width: min(100vw, 1400px);
    margin: 0 auto;
  }
}
.hero__section {
  position: relative;
  padding-bottom: 123px;
  & .stars {
    position: absolute;
    top: 192px;

    z-index: -10;
  }
}
.digital__section {
  padding: 100px 0 93px 0;
}
.process__section {
  padding-bottom: 10rem;
}
/* section article {
} */
</style>
