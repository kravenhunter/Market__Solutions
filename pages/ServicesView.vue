<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import Item from "~/modules/Main/components/Process/Item.vue";
import ProcessList from "~/modules/Main/components/Process/List.vue";

import CardItem from "~/modules/Card/Item.vue";

// import PageCreateing from "~/modules/Services/PageCreateing.vue";
const landing = {
  title:
    "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией.",
  content: `Разрабатываем сайты на Tilda «под ключ» с адаптивным дизайном. Создаём продающие сайты для бизнеса, которые окупают затраты через месяц после запуска. Анализируем маркетинговую составляющую продукта и внедряем триггерные компоненты, которые увеличивают конверсию`,
  image: "/images/services/magic.jpg",
};
const landingTitle = {
  title:
    "Разрабатываем продающие и конверсионные лендинги для компаний, стартапов и малого бизнеса.",
  content: `Длинная посадочная страница с конверсией от 4% для сбора контактов на регистрацию или покупку. Презентация и предложение вашего уникального продукта на одной странице с раскрытием преимуществ, необходимости продукта, установки доверия между компанией, ее продуктом и посетителем`,
  image: "/images/services/lending_create.jpg",
};
const landingList = [
  {
    title: "Лендинг",
    content: `Одностраничный сайт или посадочная страница. Одноязычный интерфейс, который продает один продукт, курс, регистрацию на мероприятие, тестирует гипотезы.

    Лендинги также подходят для малого бизнеса. Такие сайты часто используются для интерьерных агентств, салонов, персональных страниц или как внутренняя страница сайта
    `,
    image: "jam:pen-f",
  },
  {
    title: "Мультиязычный лендинг",
    content: `Одностраничный сайт на нескольких языках с выбором пользователем языка сайта. Такие сайты заказываются для решения бизнес-задач. Это страницы компаний, которые нацелены на международный рынок, общаются с иностранной аудиторией.`,
    image: "ant-design:ant-design-outlined",
  },
  {
    title: "Мультилендинг",
    content: `Сложные лендинги с точки зрения анализа и проработки. В мультилендингах показывается контент в зависимости от ссылки, с которой зашел пользователь. Подвид мультилендинга — геолендинг. Геолендинг тоже сложный продукт, в котором информация меняется в зависимости от страны или города. Экстремальный вариант — многоязычный мульти-гео-лендинг. Пока таких не встречали, но готовы взяться :)`,
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "Верстка лендинга",
    content: `Верстаем лендинг на Tilda. Если вы подготовили дизайн макет, верстальщик лендингов соберет адаптивный одностраничник за 3−5 дней. Для этого нам потребуется только исходник дизайна в слоях и 20 минут для уточнения вопросов.

    Если в макете будут необъективные решения, аргументировано дадим рекомендации по улучшению. Скорость верстки зависит от сложности решений.`,
    image: "mdi:paint-outline",
  },
];

const webStoreitle = {
  title:
    "Создаем продающие сайты интернет-магазинов под ключ с наполнением каталога за 1,5 месяца.",
  content: `Онлайн-магазин с карточками товаров или услуг. Управление ценами, скидками прямо на сайте, онлайн-оплата с возможностью интеграции более 10 платежных систем или эквайринга. Интеграция с CRM-системами, онлайн-консультантом, виджетами, каталогом. Каталог с фильтрацией, категориями, поиску по ассортименту, возможностью импорта или экспорта продукции`,
  image: "/images/services/lending_create.jpg",
};

const storeList = [
  {
    title: "Пакет Base+",
    content: `Одностраничный сайт или посадочная страница. Одноязычный интерфейс, который продает один продукт, курс, регистрацию на мероприятие, тестирует гипотезы.

    Лендинги также подходят для малого бизнеса. Такие сайты часто используются для интерьерных агентств, салонов, персональных страниц или как внутренняя страница сайта
    `,
    image: "jam:pen-f",
  },
  {
    title: "Пакет PRo+",
    content: `Одностраничный сайт на нескольких языках с выбором пользователем языка сайта. Такие сайты заказываются для решения бизнес-задач. Это страницы компаний, которые нацелены на международный рынок, общаются с иностранной аудиторией.`,
    image: "ant-design:ant-design-outlined",
  },
];
const webPortfolio = {
  title:
    "Создаем сайты-визитки под ключ для начинающих компаний и гигантов за месяц с подготовкой к продвижению в сети",
  content: `Главная информация об организации и услугах с минимальными вложениями. Позволяет быстро предоставить описание компании, контактную информацию, услуги. Небольшой веб ресурс, как правило до 5 страниц`,
  image: "/images/services/lending_create.jpg",
};

const webPortfolioList = [
  {
    title: "Заявить",
    content: `Визитка — быстрый способ рассказать о деятельности компании, вызвать доверие, запомниться, подготовиться к созданию крупного сайта компании`,
    image: "jam:pen-f",
  },
  {
    title: "Презентовать",
    content: `Позволяет презентовать продукт, его характеристики, преимущества. Описать перечень услуг, показать портфолио и быстро связаться`,
    image: "ant-design:ant-design-outlined",
  },
  {
    title: "Связать",
    content: `На сайте визитке важно указать все каналы связи. Пользователь выберет наиболее быстрый и удобный способ. Чем больше каналов — тем лучше`,
    image: "ant-design:ant-design-outlined",
  },
  {
    title: "Расположить",
    content: `Если у вас есть база клиентов, но им сложно вас найти — это отличный способ показать карту с маршрутом или пошаговый путь с фотографиями`,
    image: "ant-design:ant-design-outlined",
  },
];

useSeoMeta({
  title: "Услуги",
  ogTitle: "Услуги",
});
</script>

<template>
  <div class="services__page">
    <section class="service__section section__bg-white">
      <CardItem :image="landing.image" :alt="landing.title" class="center__content">
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
        class="center__content">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="landingTitle.title"
            :content-text="landingTitle.content"
            text-position="initial" />
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
          <Item v-for="item in landingList" :key="item.title" :item="item" node-width="450px">
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
    <section class="service__section">
      <CardItem :image="webStoreitle.image" :alt="webStoreitle.title" class="center__content">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="webStoreitle.title"
            :content-text="webStoreitle.content"
            text-position="initial" />
        </template>
      </CardItem>
    </section>
    <section class="service__section section__bg-white">
      <ProcessList class="center__content">
        <template #title>
          <Title color-huge="black" :title-level="4" huge="Интернет магазин разработка под ключ" />
        </template>
        <template #list>
          <Item v-for="item in storeList" :key="item.title" :item="item" node-width="450px">
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
    <section class="service__section">
      <CardItem
        colum-direction="row-reverse"
        :image="webPortfolio.image"
        :alt="webPortfolio.title"
        class="center__content">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="webPortfolio.title"
            :content-text="webPortfolio.content"
            text-position="initial" />
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
          <Item v-for="item in webPortfolioList" :key="item.title" :item="item" node-width="450px">
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
  </div>
</template>

<style scoped lang="scss"></style>
