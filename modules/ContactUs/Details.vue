<script setup lang="ts">
import { contactUs } from "~/store/static__data";
</script>

<template>
  <div class="contacts">
    <div class="contacts__btn">
      <slot name="close" />
    </div>

    <div class="contacts__block">
      <div class="contacts__block__details">
        <slot name="title" />
        <ul v-if="contactUs.contacts.length" class="contacts__block__details__socials">
          <li v-for="{ icon, title, text } in contactUs.contacts" :key="title">
            <UiElementsIcon :name="icon" class="rounded bg-black" color="white" width="50" />
            <div class="contacts__block__details__socials__item">
              <h6>{{ title }}</h6>
              <small v-if="text">{{ text }}</small>
            </div>
          </li>
          <li v-if="contactUs.socials">
            <UiElementsIcon name="ph:rss" class="rounded bg-black" color="white" width="50" />
            <div class="contacts__block__details__socials__item">
              <h6>Найдите нас в сети</h6>
              <ul>
                <li v-for="(media, index) in contactUs.socials" :key="index">
                  <UiElementsIcon
                    :name="media.icon"
                    class="rounded bg-black icon-hover-white"
                    color="white"
                    width="40" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <slot name="form" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  padding: 1rem 2.5rem;
  &__btn {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 1024px) {
    &__btn {
      padding-top: 6rem;
    }
  }
}
.contacts__block {
  font-family: var(--second-family);
  display: grid;
  grid-template-columns: minmax(394px, 401px) minmax(394px, 795px);
  column-gap: 2rem;
  justify-content: space-between;
  align-items: start;
  color: var(--black);

  & .titles {
    border-bottom: 1px solid rgba(18, 17, 17, 0.143);
  }
  &__details {
    /*   width: clamp(394px, 80%, 401px); */
    display: grid;
    row-gap: 5rem;

    &__socials {
      display: grid;
      row-gap: 5rem;
      & li {
        display: flex;
        column-gap: 2.6rem;
      }
      &__item {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        & ul {
          display: flex;
          column-gap: 1rem;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    row-gap: 5rem;
    justify-items: center;
    align-content: start;
    height: 100dvh;
    &__details {
      &__socials {
        display: none;
      }
    }
  }
}
</style>
