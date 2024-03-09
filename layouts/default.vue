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
  width: min(100%, 1920px);
  position: relative;
  display: grid;
  row-gap: 5rem;
  padding-top: 2.2rem;
  color: var(--white-color);
  min-height: 100vh;
  /*   & main {
    margin-top: 5rem;
  } */
  & header,
  footer {
    justify-self: center;
  }
}
</style>
