<script setup lang="ts"></script>

<template>
  <header class="nav">
    <nav>
      <ul class="flex justify-center gap-x-9 py-10 text-3xl">
        <li>
          <UiElementsButton class="px-7 py-2" :is-button="false" link-path="/">
            Главная</UiElementsButton
          >
        </li>
        <li>
          <UiElementsButton
            class="px-7 py-2"
            :is-button="false"
            title="Examples"
            link-path="/examples">
            Examples</UiElementsButton
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss"></style>
