<script setup lang="ts">
import Pulse from "~/modules/Main/components/Pulse.vue";
</script>

<template>
  <article class="business__grow">
    <div class="business__grow__description">
      <h1>
        Ready to take your
        <span class="title__color">Business Growth </span>
        to the next level?
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas
        malesuada viverra gravida libero cursus nulla leo pulvinar.
      </p>
      <UiElementsButton button-class="color__white">
        <UiElementsIcon name="oui:arrow-right" class="rounded bg-black" color="white" />
        <p class="trial">Start your Free Trial</p></UiElementsButton
      >
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
    <Pulse image="/images/main/businessGrow.jpg" title="businessGrow" />
    <!--     <div class="business__grow__cover">
     
      <NuxtImg src="/images/main/businessGrow.jpg" alt="businessGrow" />
    </div> -->
  </article>
</template>

<style scoped lang="scss">
.title__color {
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

    & button {
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
}
</style>
