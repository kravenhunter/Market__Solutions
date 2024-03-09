<script setup lang="ts">
import ContactForm from "~/modules/ContactUs/Form.vue";

const contactUs = {
  title: "Связаться с нами",
  content: "Мы сотрудичаем со многими дизайнерами и переводчиками",
  email: "hello@example.com",
  watsUp: "+123 456 7892",
  socials: [
    {
      icon: "uit:facebook-f",
      link: "",
    },
    {
      icon: "basil:vk-outline",
      link: "",
    },
    {
      icon: "basil:telegram-outline",
      link: "",
    },
  ],
};

useSeoMeta({
  title: "Контакты",
  ogTitle: "Контакты",
});
</script>

<template>
  <section class="contacts__section section__bg-white">
    <ContactForm :contact-us="contactUs" class="center__content" />
  </section>
</template>
