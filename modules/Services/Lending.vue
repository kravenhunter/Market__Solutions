<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";

const landing = {
  title:
    "Создание Лендинга за четыре дняРазрабатываем продающие и конверсионные лендинги для компаний, стартапов и малого бизнеса с глубокой проработкой проекта",
  content: `Длинная посадочная страница с конверсией от 4% для сбора контактов на регистрацию или покупку. Презентация и предложение вашего уникального продукта на одной странице с раскрытием преимуществ, необходимости продукта, установки доверия между компанией, ее продуктом и посетителем`,
  image: "/images/services/lending_create.jpg",
};
</script>

<template>
  <article class="lending">
    <div class="lending__details">
      <Title
        :title-level="3"
        class="font-second"
        :huge="landing.title"
        :content-text="landing.content"
        text-position="initial" />
      <UiElementsButton button-class="color__white">
        <UiElementsIcon name="oui:arrow-right" class="rounded bg-black" color="white" />
        <p class="trial">Расчитать стоимость</p>
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
