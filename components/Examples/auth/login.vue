<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  email: "",
  password: "",
});
const isLoading = ref(false);

const formHandler = async (event: Event) => {
  event.preventDefault();
  console.log(state);
  // navigateTo("/guard");
};
</script>

<template>
  <div class="login_form">
    <div class="title_group">
      <NuxtImg src="/images/logo.png" alt="logo" />

      <h1>Login to your account</h1>
    </div>

    <form @submit.prevent="formHandler">
      <input type="email" placeholder="Email" v-model="state.email" />
      <input type="password" placeholder="Password" v-model="state.password" />
      <button title="login" type="submit"><p>LogIn</p></button>
      <small>If you don't have an account try <a href="#">Register</a> </small>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login_form {
  display: grid;
  row-gap: 30px;
  & small {
    font-size: 1.4rem;
  }
  & a {
    color: var(--color-sky-hover);
  }
  & form {
    background: var(--color-light);
    padding: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    -webkit-box-shadow: -2px 2px 28px -3px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -2px 2px 28px -3px rgba(34, 60, 80, 0.2);
    box-shadow: -2px 2px 28px -3px rgba(34, 60, 80, 0.2);
  }
  & input {
    font-size: 1.4rem;
    padding: 10px;
    border: 1px solid rgba(194, 193, 193, 0.885);
    border-radius: 5px;
  }
  & button {
    cursor: pointer;
    border-radius: 5px;
    color: white;
    background: var(--color-sky);
    &:hover {
      background: var(--color-sky-hover);
    }
    & p {
      font-size: 1.7rem;
      font-weight: 500;
      margin: 10px 0;
    }
  }

  & .title_group {
    display: grid;
    justify-items: center;
    & img {
      width: 50px;
    }
    & h1 {
      font-size: 3rem;
      font-weight: 600;
    }
  }
}
</style>
