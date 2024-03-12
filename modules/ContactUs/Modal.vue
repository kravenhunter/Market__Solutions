<script setup lang="ts">
import Modal from "~/components/ui-elements/Modal.vue";
import Title from "~/components/ui-elements/Title.vue";
import { useModal } from "~/composables/useModal";
import ContactDetails from "~/modules/ContactUs/Details.vue";
import ContactForm from "~/modules/ContactUs/Form.vue";

interface IProps {
  buttonTitle?: string;
  title?: string;
  content?: string;
}

withDefaults(defineProps<IProps>(), {
  buttonTitle: "Заказать оценку",
  title: "Заказать оценку проекта",
  content:
    "Расскажите нам о своем проекте, подумаем над ним вместе. Начните с простого — просто напишите нам.",
});

const { openModaComputed, handlerModal } = useModal();
</script>

<template>
  <div class="contact__modal">
    <UiElementsButton button-class="color__white" @click="openModaComputed = !openModaComputed">
      <UiElementsIcon name="oui:arrow-right" class="rounded bg-black" color="white" />
      <p class="trial">{{ buttonTitle }}</p>
    </UiElementsButton>
    <ClientOnly>
      <Teleport to="#modal" :disabled="!openModaComputed">
        <Modal v-if="openModaComputed" @click="handlerModal">
          <ContactDetails class="center__content section__bg-white horisontal__gaps">
            <template #close>
              <UiElementsIcon
                @click="openModaComputed = !openModaComputed"
                name="mingcute:close-fill"
                class="rounded" />
            </template>
            <template #title>
              <Title
                :title-level="3"
                :huge="title"
                :content-text="content"
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
  </div>
</template>
