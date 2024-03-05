<script setup lang="ts"></script>

<template>
  <div class="default__layout">
    <UiHeader class="center__content" />
    <main class="main">
      <slot />
    </main>
    <UiFooter class="center__content" />
  </div>
</template>

<style scoped lang="scss">
.default__layout {
  & .center__content {
    width: min(100vw, 1400px);
    margin: 0 auto;
  }
}

.default__layout {
  width: min(100%, 1920px);
  position: relative;
  display: grid;
  /*   justify-content: center; */
  padding-top: 2.2rem;
  color: var(--white-color);
  min-height: 100vh;

  /* & header,
  main,
  footer {
    width: min(100vw, 1400px);
  } */

  /* &__stars {
    position: absolute;
    top: 192px;
    left: -2%;
    z-index: -10;
  } */
}
</style>
