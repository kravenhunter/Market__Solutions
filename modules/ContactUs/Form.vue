<script setup lang="ts">
import { vMaska } from "maska";

const state = reactive({
  name: "",
  companyName: "",
  email: "",
  phone: "",
  message: "",
});

const phoneMask = reactive({
  mask: "+{7}(###)###-##-##",
  eager: true,
});

const TOKEN = "7156471899:AAHRMFPMOTU5UulZRbZ7PsJrB-Xl5g5SL68";
const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const CHAT_ID = "-1002081916896";

const isFilled = computed(() => !!(state.name && state.email && state.phone && state.message));

const sendForm = async () => {
  if (isFilled.value) {
    const text = `\n
        <b>Имя: </b><i> ${state.name} </i>\n
        <b>Название компании: </b> <i> ${state.companyName}</i> \n
        <b>Почта: </b> <i> ${state.email}</i> \n
        <b>Телефон: </b> <i> ${state.phone}</i> \n
        <b>Коментарий: </b> <i> ${state.message}</i> \n
    `;

    try {
      const result = await $fetch(API_URL, {
        method: "POST",
        body: {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text,
        },
      });
      console.log(result);

      /*     popap.value.buttonTrigger = !popap.value.buttonTrigger;
    popap.value.timerTrigger = !popap.value.buttonTrigger; */
    } catch (error) {
      console.log(error);

      /*  popap.value.buttonTrigger = !popap.value.buttonTrigger; */
    }
  }
};
</script>

<template>
  <form class="contacts__form" @submit.prevent="sendForm">
    <label>
      <p>Имя*</p>
      <input type="text" v-model="state.name" />
    </label>
    <label>
      <p>Название компании</p>
      <input type="text" v-model="state.companyName" />
    </label>
    <label>
      <p>Почта*</p>
      <input type="text" v-model="state.email" />
    </label>
    <label>
      <p>Телефон*</p>
      <input type="text" v-maska:[phoneMask] v-model="state.phone" />
    </label>
    <label class="message">
      <p>Message*</p>
      <textarea v-model="state.message" name="" id="" cols="30" rows="10"></textarea>
    </label>
    <UiElementsButton type="submit" button-class="color__white">Send Message</UiElementsButton>
  </form>
</template>

<style scoped lang="scss">
.contacts__form {
  width: min(100%, 795px);
  font-weight: 400;
  font-size: 18px;
  background-color: var(--light-grey);
  padding: 4.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5.2rem;
  column-gap: 1rem;
  & label {
    width: min(100%, 325px);
    & input,
    textarea {
      width: 100%;
      padding: 1rem;
      &:focus {
        outline-width: 0;
      }
    }
  }
  & .message {
    width: 100%;
  }
}
</style>
