<script setup lang="ts">
import Pulse from "~/modules/BusinessGrow/Pulse.vue";
</script>

<template>
  <article class="business__grow">
    <div class="business__grow__description">
      <h1>
        Мы готовы поднять
        <span class="title__color">Ваш Бизнес </span>
        на новый уровень
      </h1>
      <p>
        Разрабатываем уникальные приложения и сервисы любых типов: корпоративные порталы, CRM, ERP,
        E-commerce, E-learning и другие.
      </p>
      <div class="order">
        <slot name="button" />
      </div>

      <div class="business__grow__trasted">
        <h6 class="title__color">Trusted by Leading Brands</h6>
        <ul class="business__grow__trasted__brands">
          <li><IconsGreenish /></li>
          <li><IconsAutomation /></li>
          <li><IconsLeafe /></li>
          <li><IconsMindFulness /></li>
        </ul>
      </div>
    </div>
    <Pulse image="/images/main/businessGrow.webp" title="businessGrow" />
  </article>
</template>

<style scoped lang="scss">
.title__color {
  display: block;
  color: var(--light-green);
}

.business__grow {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;

  &__description {
    display: grid;
    row-gap: 3.2rem;
    & h1 {
      font-size: clamp(4.5rem, 7vw, 6.4rem);
    }
    & .order {
      justify-self: start;
      & .trial {
        padding-right: 10px;
      }
    }
  }
  &__trasted {
    display: grid;
    row-gap: 20px;
    margin-top: 121px;
    &__brands {
      display: flex;
    }
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    & .pulse__wraper {
      display: none;
    }
    &__trasted {
      &__brands {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
