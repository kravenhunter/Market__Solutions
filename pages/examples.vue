<script setup lang="ts"></script>

<template>
  <div class="examples grid gap-y-40 pt-32">
    <div class="icons">
      <h1 class="text-center text-4xl py-6">Icons</h1>
      <ul class="flex gap-x-4 justify-center">
        <li>
          <UiElementsButton button-class="rounded-full p-2 border-2 border-sky-500 p">
            <UiElementsIcon />
          </UiElementsButton>
        </li>
        <li>
          <UiElementsButton button-class="rounded-full p-2 border-2 border-sky-500 p">
            <UiElementsIcon name="material-symbols-light:add-location-rounded" />
          </UiElementsButton>
        </li>
        <li>
          <UiElementsButton button-class="rounded-full p-2 border-2 border-sky-500 p">
            <UiElementsIcon name="material-symbols-light:add-notes-outline" />
          </UiElementsButton>
        </li>
        <li>
          <UiElementsButton button-class="rounded-full p-2 border-2 border-sky-500 p">
            <UiElementsIcon name="material-symbols-light:all-inclusive" />
          </UiElementsButton>
        </li>
        <li>
          <UiElementsButton button-class="rounded-full p-2 border-2 border-sky-500 p">
            <UiElementsIcon name="material-symbols-light:allergies" />
          </UiElementsButton>
        </li>
      </ul>
    </div>
    <div class="examples__auth justify-self-center grid gap-y-20">
      <ExamplesAuthLogin />
      <ExamplesAuthRegister />
    </div>
  </div>
</template>

<style scoped lang="scss">
.examples {
  height: 100%;
  &__auth {
    width: min(100%, 500px);
  }
}
</style>
