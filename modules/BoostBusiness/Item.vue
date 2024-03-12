<script setup lang="ts">
const boostList = [
  "Системы управления контентом",
  "Платформы для обучени и курсов",
  "Личный блоги и сайт-визитка",
  "Сайты для продаж товаров",
  "Создание крутых дизайнов и лого",
  "Приложения для бизнеса",
];
</script>

<template>
  <article class="boost">
    <div class="boost__description">
      <slot name="title"></slot>

      <p>
        Мы стремимся создавать уникальные и инновационные решения, которые помогают нашим клиентам
        укрепить свое присутствие в онлайн-среде и достичь новых высот.
      </p>
      <ul class="boost__description__list">
        <li v-for="(boost, index) in boostList" :key="index">
          <UiElementsIcon name="material-symbols:check" class="rounded bg-light-green" width="27" />
          <p>{{ boost }}</p>
        </li>
      </ul>
    </div>
    <div class="boost__images">
      <div class="boost__images__first">
        <NuxtImg src="/images/boost/boostImg1.jpg" width="326" alt="boostImg1" />
        <div class="boost__images__first__sub">
          <div class="boost__images__first__sub__one">
            <p class="count">100%</p>
            <small>Довольных Клиентов</small>
          </div>
          <div class="boost__images__first__sub__two">
            <p class="count">95+</p>
            <small>Завершенных Проектов </small>
          </div>
        </div>
      </div>
      <div class="boost__images__second">
        <NuxtImg src="/images/boost/boostImg2.jpg" width="285" alt="boostImg2" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.boost,
.boost__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.boost {
  /* column-gap: 6.9rem; */

  & h4 {
    color: var(--light-green);
  }
  & img {
    border-radius: 20px;
  }
  & .count {
    font-size: 4.5rem;
    font-weight: 700;
  }

  &__description {
    width: min(100%, 568px);
    display: grid;
    row-gap: 2.4rem;
    &__list {
      display: flex;
      flex-wrap: wrap;
      row-gap: 1rem;

      & li {
        width: min(100%, 284px);

        display: grid;
        grid-template-columns: auto auto;
        column-gap: 1.3rem;
        padding-right: 0.8rem;
      }
    }
  }
  &__images {
    width: min(100%, 739px);
    display: grid;
    grid-template-columns: 389px 285px;
    &__first {
      display: grid;
      row-gap: 2rem;
      &__sub {
        display: flex;
        column-gap: 2rem;
        text-align: center;
        align-items: flex-start;
        &__one {
          width: min(100%, 200px);
          display: grid;
          row-gap: 2rem;
          padding: 2rem;
          border-right: 1px solid white;
        }

        &__two {
          margin-top: 8.9rem;
          display: grid;
          row-gap: 2rem;
          padding: 2rem;
        }
      }
    }
    &__second {
      width: 100%;
      align-self: end;
      text-align: end;
    }
    @media (max-width: 730px) {
      grid-template-columns: 1fr;
      justify-items: center;
      &__second {
        display: none;
      }
    }
  }
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 6.9rem;
  }
}
</style>
