<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import BoostBusiness from "~/modules/BoostBusiness/Item.vue";
import BusinessGrow from "~/modules/BusinessGrow/Item.vue";
import ContactModal from "~/modules/ContactUs/Modal.vue";
import ProcessItem from "~/modules/Process/Item.vue";
import ProcessList from "~/modules/Process/List.vue";
import ShowcaseList from "~/modules/Showcase/List.vue";
import { developList, processDevelope } from "~/store/static__data";

// import CommentList from "~/modules/Comment/List.vue";

useSeoMeta({
  title: "Главная",
  ogTitle: "Главная",
});
</script>

<template>
  <div class="main__page">
    <section class="hero__section">
      <NuxtImg class="stars" src="/images/layout/stars.svg" width="183" alt="logo" />
      <BusinessGrow class="center__content horisontal__gaps">
        <template #button>
          <ContactModal />
        </template>
      </BusinessGrow>
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
          <ProcessItem
            v-for="item in developList"
            :key="item.title"
            :item="item"
            node-width="450px">
            <template #title>
              <Title
                :title-level="5"
                :huge="item.title"
                text-position="initial"
                color-huge="black" />
            </template>
          </ProcessItem>
        </template>
      </ProcessList>
    </section>
    <section class="boost__section">
      <BoostBusiness class="center__content horisontal__gaps">
        <template #title>
          <Title
            small="Наша Миссия"
            :is-small-show="true"
            huge="Cделать ваш бизнес успешным"
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
          <ProcessItem
            v-for="item in processDevelope"
            :key="item.title"
            :item="item"
            node-width="450px">
            <template #title>
              <Title
                :title-level="5"
                :huge="item.title"
                text-position="initial"
                color-huge="black" />
            </template>
          </ProcessItem>
        </template>
      </ProcessList>
      <ShowcaseList class="center__content horisontal__gaps">
        <template #title>
          <Title
            :title-level="3"
            :is-small-show="false"
            huge="Recent Showcase"
            color-huge="black" />
        </template>
      </ShowcaseList>

      <!--      <CommentList class="center__content" /> -->
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
</style>
