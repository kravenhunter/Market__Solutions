<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import CardItem from "~/modules/Card/Item.vue";
import CoverItem from "~/modules/Cover/Item.vue";
import CoverList from "~/modules/Cover/List.vue";

const portfolioTitle = {
  title: "Портфолио",
  content: `web.solution – это команда разработчиков, имеющих большой опыт разработки: Web-сервисов и порталов, мобильных приложений и десктоп-приложений, а также комплексов работы с оборудованием и различных интеграций.`,
  image: "/images/services/magic.jpg",
};

const missionTitle = {
  title: "Наша миссия",
  content: `Cделать ваш бизнес успешным, предоставляя инновационные и качественные IT-решения, которые помогут вам выделиться среди конкурентов и добиться поистине выдающихся результатов.`,
  image: "/images/services/magic.jpg",
};

const webPortfolioList = [
  {
    title: "Блог",
    content: `Торговая площадка по найму фрилансеров, где продавец может приобрести тарифные планы (ежемесячные/ежегодные/пожизненные/бесплатные) для продажи своих услуг/выступлений.`,
    image: "/images/portfolios/news.png",
  },
  {
    title: "Магазин",
    content: `Торговая площадка по найму фрилансеров, где продавец может приобрести тарифные планы (ежемесячные/ежегодные/пожизненные/бесплатные) для продажи своих услуг/выступлений.`,
    image: "/images/portfolios/store.png",
  },
  {
    title: "Сервис услуг",
    content: `Торговая площадка по найму фрилансеров, где продавец может приобрести тарифные планы (ежемесячные/ежегодные/пожизненные/бесплатные) для продажи своих услуг/выступлений.`,
    image: "/images/portfolios/law.png",
  },
  {
    title: "Туризм",
    content: `Торговая площадка по найму фрилансеров, где продавец может приобрести тарифные планы (ежемесячные/ежегодные/пожизненные/бесплатные) для продажи своих услуг/выступлений.`,
    image: "/images/portfolios/tourizm.png",
  },
];
useSeoMeta({
  title: "Портфолио",
  ogTitle: "Портфолио",
});
</script>

<template>
  <section class="portfolio__section section__bg-white">
    <CardItem class="center__content">
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
        <CoverItem
          v-for="{ title, content, image } in webPortfolioList"
          :key="title"
          :image="image">
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
