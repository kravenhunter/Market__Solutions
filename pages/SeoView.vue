<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import CardItem from "~/modules/Card/Item.vue";
import ContactModal from "~/modules/ContactUs/Modal.vue";
import ProcessItem from "~/modules/Process/Item.vue";
import ProcessList from "~/modules/Process/List.vue";
import { seoList, seoOptimize, seoOrederTitle, seoProvideList } from "~/store/static__data";

useSeoMeta({
  title: "SEO",
  ogTitle: "SEO",
});
</script>

<template>
  <div class="seo__page">
    <section class="service__section">
      <CardItem
        :image="seoOptimize.image"
        :alt="seoOptimize.title"
        class="center__content horisontal__gaps">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="seoOptimize.title"
            :content-text="seoOptimize.content"
            text-position="initial" />
        </template>
        <template #button>
          <ContactModal />
        </template>
      </CardItem>
    </section>
    <section class="service__section section__bg-white">
      <CardItem
        colum-direction="row-reverse"
        :image="seoOrederTitle.image"
        :alt="seoOrederTitle.title"
        class="center__content horisontal__gaps">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            color-huge="black"
            :huge="seoOrederTitle.title"
            :content-text="seoOrederTitle.content"
            text-position="initial" />
        </template>
      </CardItem>
    </section>
    <section class="service__section">
      <ProcessList :is-flex-wrap="false" class="center__content">
        <template #title>
          <Title
            color-huge="white"
            :title-level="4"
            huge="Создаем и оптимизируем сайты, которые будут точно отвечать на запросы пользователей и находиться в ТОПе" />
        </template>
        <template #list>
          <ProcessItem
            v-for="item in seoList"
            :key="item.title"
            :item="item"
            node-width="450px"
            :is-column-direction="false"
            color-border="white"
            color-text="white">
            <template #title>
              <Title
                :title-level="5"
                :huge="item.title"
                text-position="initial"
                color-huge="white" />
            </template>
          </ProcessItem>
        </template>
      </ProcessList>
    </section>
    <section class="service__section section__bg-white">
      <ProcessList :is-flex-wrap="false" class="center__content">
        <template #title>
          <Title
            color-huge="black"
            :title-level="4"
            huge="Мы продвигаем сайты в ТОП выдачи с нуля до результатов только «белыми» методами" />
        </template>
        <template #list>
          <ProcessItem
            v-for="item in seoProvideList"
            :key="item.title"
            :item="item"
            node-width="450px"
            :is-column-direction="false"
            color-border="black"
            color-text="black">
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
