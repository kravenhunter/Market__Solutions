<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import CardItem from "~/modules/Card/Item.vue";
import Item from "~/modules/Main/components/Process/Item.vue";
import ProcessList from "~/modules/Main/components/Process/List.vue";

const seoOptimize = {
  title: "SEO-оптимизация. Оптимизируем сайты для продвижения в поисковой выдаче за 7 дней",
  content: `Подготовка и настройка сайта к SEO продвижению. Внутренняя оптимизация, настройка зеркал, технических параметров, сбор семантического ядра, наполнение текущего интернет ресурса вручную собранными ключевыми словами. При необходимости, изменение структуры ресурса. Единоразовая оплата услуги`,
  image: "/images/services/magic.jpg",
};
const seoOrederTitle = {
  title: "Стоит ли заказать сео-оптимизацию сайта и для чего она нужна",
  content: `SEO-оптимизация сайта нужна для подготовки к раскрутке. Поисковые системы имеют свои требования и законы. Seo-оптимизация — это единовременная настройка под требования поисковиков. Заказать seo лучше до запуска сайта, потому что оптимизируя сайт, мы сообщаем Яндексу и Google, что принимаем их правила игры. Если сайт хорошо оптимизирован — он удовлетворяет критериям поисковых роботов, быстро индексируется, а значит готов к продвижению`,
  image: "/images/services/lending_create.jpg",
};

const seoList = [
  {
    title: "Семантика",
    content: `Специалист по продвижению и оптимизации собирает семантическое ядро запросов, кластеризует, проектирует seo-структуру проекта, прописывает мета-теги к каждой странице. Так контент страницы становится релевантным ключевым запросам пользователей.`,
    image: "jam:pen-f",
  },
  {
    title: "Sitemap & Robots",
    content: `Sitemap — главный файл для индексации со ссылками на страницы сайта. Этот файл сообщает поисковым системам актуальную структуру интернет-сайта.

Robots — указывает параметры индексирования страниц веб-ресурса для поисковых роботов. Он передает поисковикам какие файлы или ресурсы стоит сканировать.

Ошибки Robots и Sitemap ведут к потери позиций, трафика, снижению конверсии.

Для подготовки к продвижению сайта оптимизатор проверяет технические файлы — Sitemap и Robots, настраивает редиректы, устраняет ошибки.
    `,
    image: "ant-design:ant-design-outlined",
  },
  {
    title: "Скорость загрузки",
    content: `По данным Google оптимальная скорость от 0 до 2,5 секунд — с 2010 года этот пункт является ранжирующим фактором. По данным исследования PromoPult 52% интернет-ресурсов в ТОП не проходят проверку скорости на десктопе, а также 90% на мобильной версии. Наша задача — ускорить ваш сайт, чтобы обойти конкурентов.`,
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "ЧПУ URL",
    content: `По-русски человекопонятный URL или читаемые адреса страниц. Это обязательный пункт, который влияет на ранжирование.

«В детстве мой отец говорил: видишь ссылку /page9357−5665−8484.html — скорее всего там вирус или бесполезная инфа, не заходи. До сих пор пользуюсь этим принципом, хотя понимаю, что у многих просто не оптимизированы страницы»
 — Алексей, CEO WebValley

Адреса должны соответствовать странице, а еще лучше содержать ключевой запрос. Это не только нужно поисковикам, но и людям. Удобнее увидеть в адресе название, особенно если оно подсвечено в поисковой выдаче, сказать адрес по телефону, чтобы человек сам мог его написать или запомнить.`,
    image: "mdi:paint-outline",
  },
  {
    title: "Мета-теги",
    content: `Прописываем теги:

Н1, Н2, Н3 — заголовки. Подхватываются поисковиками, иногда отображаются в поисковой выдаче. Влияют на релевантность и продвижение.

Title страницы — главный тег, который соответствует названию страницы и виден в поисковой выдаче. Влияет на оптимизацию сайта, ранжирование в поиске, кликабельность.

Description — второй по важности тег, который также виден в выдаче, влияет на продвижение, оптимизацию, кликабельность.

Альт текст — оптимизация изображений. Ваш сайт могут найти через картинки.`,
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "G.Console & Я.Вебмастер",
    content: `Настраиваем сервисы вебмастеров для продвижения, ускорения индексации, отслеживания трафика и позиций. Сюда же входит подключение аналитики и метрики`,
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "Социальные сети",
    content: `Оптимизируем сайт для социальных сетей. Подготавливаем бейджи, title, description. Помогаем ссылкам на ваш сайт выглядеть презентабельно и кликабельно.`,
    image: "fluent:speaker-2-28-regular",
  },
];
const seoProvideList = [
  {
    title: "Аудит конкурентов",
    content: `1.Определяем направление развития через анализ конкурентов и ниши
2. Рассчитываем количество целевых страниц и ссылок
3. Ищем «аномалии», чтобы применить секретные фишечки на продвигаемом ресурсе
    `,
    image: "",
  },
  {
    title: "Семантическое ядро",
    content: `Ручной сбор семантического ядра, его чистка, кластеризация. Первостепенно собираем ключи по приоритетному направлению деятельности клиента. То есть направление, по которому клиент получает максимальную прибыль. Это позволяет максимально быстро окупить вложения в seo продвижение`,
    image: "ant-design:ant-design-outlined",
  },
  {
    title: "Релевантность",
    content: `1.Прописываем метатеги с учетом ключевых фраз, формируем кликабельные сниппеты для поисковой выдачи
2.Формируем ЧПУ адреса страниц
3.Продумываем перелиновку между страницами
4.Формируем отчет`,
    image: "",
  },
  {
    title: "Копирайтинг",
    content: `1. Составляем техническое задание копирайтеру на написание текстов
2.Указываем что и как написать
3.Проверяем текст на seo-оптимизацию, вносим правки
4.Вы получаете готовое оптимизированное наполнение`,
    image: "",
  },
  {
    title: "Планирование",
    content: `1.Подбираем чистые релевантные трафиковые площадки для размещения контента с сылкой на ваш сайт
2.составляем план написания статей и закипки ссылок. Осуществляем закупку, отслеживаем результаты. Полная отчетность
3.Выстраиваем и осуществляем наращивание страниц уникальным контентом под каждую группу запросов`,
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "G.Console & Я.Вебмастер",
    content: `Настраиваем сервисы вебмастеров для продвижения, ускорения индексации, отслеживания трафика и позиций. Сюда же входит подключение аналитики и метрики`,
    image: "fluent:speaker-2-28-regular",
  },
  {
    title: "Поддержка",
    content: `Поддерживаем связь. Оказываем помощь бессрочно. Снимаем головную боль, помогаем с платежными, договорами, офертой, политиками конфиденциальности`,
    image: "",
  },
];
useSeoMeta({
  title: "SEO",
  ogTitle: "SEO",
});
</script>

<template>
  <div class="seo__page">
    <section class="service__section">
      <CardItem :image="seoOptimize.image" :alt="seoOptimize.title" class="center__content">
        <template #title>
          <Title
            :title-level="3"
            class="font-second"
            :huge="seoOptimize.title"
            :content-text="seoOptimize.content"
            text-position="initial" />
        </template>
      </CardItem>
    </section>
    <section class="service__section section__bg-white">
      <CardItem
        colum-direction="row-reverse"
        :image="seoOrederTitle.image"
        :alt="seoOrederTitle.title"
        class="center__content">
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
          <Item
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
          </Item>
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
          <Item
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
          </Item>
        </template>
      </ProcessList>
    </section>
  </div>
</template>
