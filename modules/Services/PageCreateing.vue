<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";

const landing = {
  title:
    "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией.",
  content: `Разрабатываем сайты на Tilda «под ключ» с адаптивным дизайном. Создаём продающие сайты для бизнеса, которые окупают затраты через месяц после запуска. Анализируем маркетинговую составляющую продукта и внедряем триггерные компоненты, которые увеличивают конверсию`,
  image: "/images/services/magic.jpg",
};
</script>

<template>
  <article class="lending">
    <div class="lending__details">
      <Title
        :title-level="3"
        class="font-second"
        color-huge="black"
        :huge="landing.title"
        :content-text="landing.content"
        text-position="initial" />
      <UiElementsButton button-class="color__white">
        <UiElementsIcon name="oui:arrow-right" class="rounded bg-black" color="white" />
        <p class="trial">Заказать оценку</p>
      </UiElementsButton>
    </div>

    <div class="lending__cover">
      <NuxtImg :src="landing.image" width="644" :alt="landing.title" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.lending {
  display: flex;
  justify-content: space-between;
  padding: 10rem 0;
  &__details {
    width: min(100%, 681px);
    & .titles {
      margin-bottom: 3rem;
    }
  }
}
</style>
