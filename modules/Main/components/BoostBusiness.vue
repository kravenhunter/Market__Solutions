<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";

const boostList = [
  "Moonlight newspaper up its enjoyment",
  "She new course gets living.",
  "She new course gets living.",
  "Rooms oh fully taken by worse.",
  "Perceived end certainly day.",
  "Preference any astonished unreserved Mrs.",
];
</script>

<template>
  <article class="boost">
    <div class="boost__description">
      <!--     <h4>Our Mission</h4>
      <h2>Boost your with your business.</h2> -->
      <Title small="Our Mission" huge="Boost your with your business." text-position="initial" />
      <p>
        He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty
        assistance joy.
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
            <p class="count">10k</p>
            <small>Great conversations per month</small>
          </div>
          <div class="boost__images__first__sub__two">
            <p class="count">95+</p>
            <small>Project Complete </small>
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
.boost__description__list,
.boost__images {
  display: flex;
}
.boost {
  column-gap: 6.9rem;
  padding: 120px 0 120px 0;

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
    grid-template-columns: 389px 1fr;
    &__first {
      display: grid;
      row-gap: 2rem;
      &__sub {
        display: flex;
        column-gap: 2rem;
        text-align: center;
        align-items: start;
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
  }
}
</style>
