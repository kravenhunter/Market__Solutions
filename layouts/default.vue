<script setup lang="ts"></script>

<template>
  <div class="default__layout">
    <UiHeader />
    <main class="main">
      <slot />
    </main>
    <UiFooter />
  </div>
</template>

<style scoped lang="scss">
.default__layout {
  background: var(--color-grey);
  min-height: 100vh;
}
</style>
