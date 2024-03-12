<script setup lang="ts"></script>

<template>
  <div class="default__layout">
    <div id="modal" class="modal__wrap"></div>
    <UiHeader class="center__content horisontal__gaps" />
    <main class="main">
      <slot />
    </main>
    <UiFooter class="center__content horisontal__gaps" />
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

  & header,
  footer {
    justify-self: center;
  }
  & .modal__wrap {
    position: fixed;
    z-index: 1000;
  }
}
</style>
