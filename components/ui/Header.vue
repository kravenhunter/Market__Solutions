<script setup lang="ts"></script>

<template>
  <header class="header__section">
    <IconsLogo />
    <nav class="header__section__nav">
      <ul>
        <li>
          <UiElementsButton class="px-7 py-2" :is-button="false" link-path="/">
            Главная</UiElementsButton
          >
        </li>
        <li>
          <UiElementsButton
            class="px-7 py-2"
            :is-button="false"
            title="Услуги"
            link-path="/servicesview">
            Услуги</UiElementsButton
          >
        </li>
        <li>
          <UiElementsButton class="px-7 py-2" :is-button="false" title="seo" link-path="/seoview">
            Seo</UiElementsButton
          >
        </li>
        <li>
          <UiElementsButton
            class="px-7 py-2"
            :is-button="false"
            title="Portfolios"
            link-path="/portfoliosview">
            Портфолио</UiElementsButton
          >
        </li>

        <li>
          <UiElementsButton
            class="px-7 py-2"
            :is-button="false"
            title="Examples"
            link-path="/contactview">
            Contact Us</UiElementsButton
          >
        </li>
      </ul>
    </nav>
    <UiElementsButton button-class="color__white"><p>Обсудить проект</p></UiElementsButton>
  </header>
</template>

<style scoped lang="scss">
.header__section,
.header__section__nav ul {
  display: flex;
}
.header__section {
  justify-content: space-between;
  align-items: center;
  & a {
    font-size: 2rem;
  }

  &__nav ul {
    column-gap: 3.5rem;
  }
}
</style>
