<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";
import ContactDetails from "~/modules/ContactUs/Details.vue";
import ContactForm from "~/modules/ContactUs/Form.vue";
import { contactUs } from "~/store/static__data";

useSeoMeta({
  title: "Контакты",
  ogTitle: "Контакты",
});
</script>

<template>
  <section class="contacts__section section__bg-white">
    <ContactDetails :contact-us="contactUs" class="center__content horisontal__gaps">
      <template #title>
        <Title
          :title-level="3"
          :huge="contactUs.title"
          :content-text="contactUs.content"
          text-position="initial"
          color-huge="black" />
      </template>
      <template #form>
        <ContactForm />
      </template>
    </ContactDetails>
  </section>
</template>
