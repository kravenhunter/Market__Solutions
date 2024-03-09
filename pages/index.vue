<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import BoostBusiness from "~/modules/Main/components/BoostBusiness.vue";
import BusinessGrow from "~/modules/Main/components/BusinessGrow.vue";
import CommentList from "~/modules/Main/components/Comment/List.vue";
import Item from "~/modules/Main/components/Process/Item.vue";
import ProcessList from "~/modules/Main/components/Process/List.vue";
import ShowcaseList from "~/modules/Main/components/Showcase/List.vue";

const developList = [
  {
    title: "CRM-системы",
    content: "Системы для эффективного управления и автоматизации бизнес-процессов компании",
    image: "jam:pen-f",
  },
  {
    title: "Маркетплейсы",
    content: "Онлайн-платформы для продажи и покупки товаров и услуг через интернет",
    image: "ant-design:ant-design-outlined",
  },
  {
    title: "Обучающие платформы",
    content: "Платформы для для электронного обучения в различных сферах деятельности",
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "Интернет-магазины",
    content: "Специализированные сайты для продажи товаров и услуг от производителя",
    image: "mdi:paint-outline",
  },
  {
    title: "Приложения для бизнеса",
    content: "Веб-приложения для различных ниш: металлургия, сельское хозяйство и др.",
    image: "mdi:paint-outline",
  },
  {
    title: `UI\UX дизайн`,
    content: "Проектируем интерфейсы. С понятной архитектурой и крутой визуализацией.",
    image: "mdi:paint-outline",
  },
];

const process = [
  {
    title: "Анализ",
    content:
      "Мы проводим детальный анализ проекта, обсуждаем с заказчиком его бизнес-цели и ожидаемые результаты работы.",
    image: "jam:pen-f",
  },
  {
    title: "Прототип",
    content:
      "Мы занимаемся разработкой и созданием прототипов онлайн-сервисов и IT-решений для компаний.",
    image: "ant-design:ant-design-outlined",
  },
  {
    title: "Дизайн",
    content:
      "Создаем функциональный дизайн, опираясь на передовые исследования и аналитику целевой аудитории.",
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "Разработка",
    content:
      "После завершения дизайна мы передаем его на стадию разработки, и здесь появляется визуально привлекательный и функциональный веб-продукт.",
    image: "mdi:paint-outline",
  },
  {
    title: "Тестирование",
    content:
      "Мы проводим тестирование продукта как автоматизированно, так и вручную, используя версию разработчика.",
    image: "mdi:paint-outline",
  },
  {
    title: "Внедрение",
    content:
      "Устанавливаем на технические средства заказчика (свои сервера, облачные решения и так далее) и применяем методы DevOps.",
    image: "mdi:paint-outline",
  },
];

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
      <ProcessList class="center__content">
        <template #title>
          <Title
            :title-level="3"
            small="Наши Услуги"
            huge="Разработка веб-приложений на заказ"
            color-huge="black" />
        </template>
        <template #list>
          <Item v-for="item in developList" :key="item.title" :item="item" node-width="450px">
            <template #title>
              <Title
                :title-level="5"
                :huge="item.title"
                text-position="initial"
                color-huge="black" />
            </template>
          </Item>
        </template>
      </ProcessList>
    </section>
    <section class="boost__section">
      <BoostBusiness class="center__content">
        <template #title>
          <Title
            small="Our Mission"
            huge="Boost your with your business."
            text-position="initial" />
        </template>
      </BoostBusiness>
    </section>
    <section class="process__section section__bg-white">
      <ProcessList class="center__content">
        <template #title>
          <Title :title-level="3" small="Процесс" huge="Этапы Веб-разработки" color-huge="black" />
        </template>
        <template #list>
          <Item v-for="item in process" :key="item.title" :item="item" node-width="450px">
            <template #title>
              <Title
                :title-level="5"
                :huge="item.title"
                text-position="initial"
                color-huge="black" />
            </template>
          </Item>
        </template>
      </ProcessList>
      <ShowcaseList class="center__content">
        <template #title>
          <Title
            :title-level="3"
            :is-small-show="false"
            huge="Recent Showcase"
            color-huge="black" />
        </template>
      </ShowcaseList>

      <CommentList class="center__content" />
    </section>
  </div>
</template>

<style scoped lang="scss">
.hero__section {
  position: relative;

  & .stars {
    position: absolute;
    top: 192px;

    z-index: -10;
  }
}
.process__section {
  display: grid;
  row-gap: 10rem;
}
/* .digital__section {
  padding: 100px 0 93px 0;
}
 */
/* section article {
} */
</style>
