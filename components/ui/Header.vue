<script setup lang="ts">
import IconsLogo from "~/components/icons/Logo.vue";
import Modal from "~/components/ui-elements/Modal.vue";
import Title from "~/components/ui-elements/Title.vue";
import Burger from "~/components/ui/Burger.vue";
import ContactDetails from "~/modules/ContactUs/Details.vue";
import ContactForm from "~/modules/ContactUs/Form.vue";
import { contactUs, links } from "~/store/static__data";

const isOpenModal = ref(false);
const isOpenBurger = ref(false);
const burgerActiveComputed = ref("");
const handler = (e: Event) => {
  const getId = (e.target as HTMLDivElement).id;
  if (getId === "modal__wrapper") {
    burgerActiveComputed.value = "";
    isOpenModal.value = false;
    isOpenBurger.value = false;
  }
};

watch(isOpenBurger, () => {
  if (isOpenBurger.value) {
    setTimeout(() => {
      burgerActiveComputed.value = "burger__active";
    }, 400);
  } else {
    burgerActiveComputed.value = "";
  }
});
</script>

<template>
  <header class="header__section">
    <UiElementsButton :is-button="false" link-path="/">
      <IconsLogo />
    </UiElementsButton>
    <nav class="header__section__nav">
      <ul>
        <li v-for="{ title, path } in links" :key="title">
          <UiElementsButton :is-button="false" :link-path="path">
            {{ title }}
          </UiElementsButton>
        </li>
      </ul>
    </nav>
    <UiElementsButton button-class="discass__btn color__white" @click="isOpenModal = !isOpenModal"
      ><p>Обсудить проект</p>
    </UiElementsButton>
    <UiElementsIcon
      @click="isOpenBurger = !isOpenBurger"
      name="iconamoon:menu-burger-horizontal-fill"
      class="burger__btn rounded bg-white" />
    <ClientOnly>
      <Teleport to="#modal" :disabled="!isOpenBurger">
        <Modal
          @click="handler"
          v-if="isOpenBurger"
          position-content="content-end"
          :is-active="burgerActiveComputed ? 'burger__active' : ''">
          <Burger>
            <template #close>
              <UiElementsIcon
                @click="isOpenBurger = !isOpenBurger"
                name="mingcute:close-fill"
                class="rounded" />
            </template>
            <template #list>
              <li v-for="{ title, path } in links" :key="title">
                <UiElementsButton button-class="base__link" :is-button="false" :link-path="path">
                  {{ title }}
                </UiElementsButton>
              </li>
            </template>
          </Burger>
        </Modal>
      </Teleport>
    </ClientOnly>

    <ClientOnly>
      <Teleport to="#modal" :disabled="!isOpenModal">
        <Modal v-if="isOpenModal" @click="handler">
          <ContactDetails
            :contact-us="contactUs"
            class="center__content section__bg-white horisontal__gaps">
            <template #close>
              <UiElementsIcon
                @click="isOpenModal = !isOpenModal"
                name="mingcute:close-fill"
                class="rounded" />
            </template>
            <template #title>
              <Title
                :title-level="3"
                huge="Обсудить проект"
                :content-text="contactUs.content"
                text-position="initial"
                color-huge="black" />
            </template>
            <template #form>
              <ContactForm />
            </template>
          </ContactDetails>
        </Modal>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<style scoped lang="scss">
.header__section,
.header__section__nav ul {
  display: flex;
}
.header__section {
  position: relative;
  justify-content: space-between;
  align-items: center;

  &__nav ul {
    column-gap: 3.5rem;
    & a {
      font-size: 2rem;
    }
  }
  & .burger {
    width: 50%;
    height: 50vh;
    background-color: white;
    color: black;
    /*     &.active {
      display: block;
    } */
    &__nav a {
      color: black;
    }
  }
  & .burger__btn {
    display: none;
  }

  @media (max-width: 1024px) {
    /*   grid-template-columns: 1fr; */

    &__nav,
    .discass__btn {
      display: none;
    }
    & .burger__btn {
      display: block;
    }
  }
}
</style>
