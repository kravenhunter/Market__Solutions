<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import CardItem from "~/modules/Card/Item.vue";
import CoverItem from "~/modules/Cover/Item.vue";
import CoverList from "~/modules/Cover/List.vue";
import { missionTitle, portfolioList, portfolioTitle } from "~/store/static__data";

useSeoMeta({
  title: "Портфолио",
  ogTitle: "Портфолио",
});
</script>

<template>
  <section class="portfolio__section section__bg-white">
    <CardItem class="center__content horisontal__gaps">
      <template #title>
        <Title
          :title-level="3"
          class="font-second"
          color-huge="black"
          small="О компании"
          :huge="portfolioTitle.title"
          :content-text="portfolioTitle.content"
          text-position="initial" />
      </template>
      <template #cover>
        <Title
          :title-level="3"
          class="font-second"
          color-huge="black"
          :huge="missionTitle.title"
          :content-text="missionTitle.content"
          text-position="end" />
      </template>
    </CardItem>
    <span class="center__content"> </span>
    <CoverList>
      <template #list>
        <CoverItem v-for="{ title, content, image } in portfolioList" :key="title" :image="image">
          <template #title>
            <Title
              :title-level="5"
              content-size="1.4rem"
              class="font-second"
              :huge="title"
              :content-text="content"
              text-position="initial" />
          </template>
        </CoverItem>
      </template>
    </CoverList>
  </section>
</template>

<style scoped lang="scss">
.portfolio__section {
  display: grid;
  row-gap: 5rem;
  & span {
    display: block;
    height: 1px;
    background-color: var(--color-grey);
    margin-bottom: 10rem;
  }
}
</style>
