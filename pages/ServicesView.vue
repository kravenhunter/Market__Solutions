<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import CardItem from "~/modules/Card/Item.vue";
import ContactModal from "~/modules/ContactUs/Modal.vue";
import ProcessItem from "~/modules/Process/Item.vue";
import ProcessList from "~/modules/Process/List.vue";
import {
  landing,
  landingList,
  landingTitle,
  storeList,
  webPortfolio,
  webPortfolioList,
  webStoreitle,
} from "~/store/static__data";

useSeoMeta({
  title: "Услуги",
  ogTitle: "Услуги",
});
</script>

<template>
  <div class="services__page">
    <section class="service__section section__bg-white">
      <CardItem
        :image="landing.image"
        :alt="landing.title"
        class="center__content horisontal__gaps">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            color-huge="black"
            :huge="landing.title"
            :content-text="landing.content"
            text-position="initial" />
        </template>
      </CardItem>
    </section>
    <section class="service__section">
      <CardItem
        colum-direction="row-reverse"
        :image="landingTitle.image"
        :alt="landingTitle.title"
        class="center__content horisontal__gaps">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="landingTitle.title"
            :content-text="landingTitle.content"
            text-position="initial" />
        </template>
        <template #button>
          <ContactModal title="Заказать Лендинг" button-title="Заказать Лендинг" />
        </template>
      </CardItem>
    </section>
    <section class="service__section section__bg-white">
      <ProcessList class="center__content">
        <template #title>
          <Title
            color-huge="black"
            :title-level="4"
            huge="Используем все ресурсы для создания топовых digital-продуктов. Вы получаете результат и качество выполненной работы" />
        </template>
        <template #list>
          <ProcessItem
            v-for="item in landingList"
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
    <section class="service__section">
      <CardItem
        :image="webStoreitle.image"
        :alt="webStoreitle.title"
        class="center__content horisontal__gaps">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="webStoreitle.title"
            :content-text="webStoreitle.content"
            text-position="initial" />
        </template>
        <template #button>
          <ContactModal title="Заказать разработку магазина" button-title="Заказать Маркетплейс" />
        </template>
      </CardItem>
    </section>
    <section class="service__section section__bg-white">
      <ProcessList class="center__content">
        <template #title>
          <Title color-huge="black" :title-level="4" huge="Интернет магазин разработка под ключ" />
        </template>
        <template #list>
          <ProcessItem v-for="item in storeList" :key="item.title" :item="item" node-width="450px">
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
    <section class="service__section">
      <CardItem
        colum-direction="row-reverse"
        :image="webPortfolio.image"
        :alt="webPortfolio.title"
        class="center__content horisontal__gaps">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="webPortfolio.title"
            :content-text="webPortfolio.content"
            text-position="initial" />
        </template>
        <template #button>
          <ContactModal button-title="Заказать Визитку" title="Заказать сайт-визитку" />
        </template>
      </CardItem>
    </section>
    <section class="service__section section__bg-white">
      <ProcessList class="center__content">
        <template #title>
          <Title
            color-huge="black"
            :title-level="4"
            huge="Сайт-визитка – самый распространенный бизнес-сайт." />
        </template>
        <template #list>
          <ProcessItem
            v-for="item in webPortfolioList"
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
  </div>
</template>

<style scoped lang="scss"></style>
