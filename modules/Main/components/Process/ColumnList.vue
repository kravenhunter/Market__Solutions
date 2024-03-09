<script setup lang="ts"></script>

<template>
  <div class="process__wrapper">
    <article class="process__wrapper__moves">
      <div class="process__wrapper__moves__slot">
        <slot name="title"></slot>
      </div>

      <ul class="process__wrapper__moves__list">
        <slot name="list"></slot>
      </ul>
    </article>
  </div>
</template>

<style scoped></style>
