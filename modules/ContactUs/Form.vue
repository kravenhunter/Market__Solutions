<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";

interface ISocials {
  icon: string;
  link: string;
}
interface IContacts {
  title: string;
  content: string;
  email: string;
  watsUp: string;
  socials: ISocials[];
}
interface IProps {
  contactUs: IContacts;
}

defineProps<IProps>();
</script>

<template>
  <div class="contacts">
    <div class="contacts__details">
      <Title
        :title-level="3"
        :huge="contactUs.title"
        :content-text="contactUs.content"
        text-position="initial"
        color-huge="black" />

      <ul class="contacts__details__socials">
        <li>
          <UiElementsIcon
            name="mdi-light:email"
            class="rounded bg-black"
            color="white"
            width="50" />
          <div class="contacts__details__socials__item">
            <h6>Our email</h6>
            <small>{{ contactUs.email }}</small>
          </div>
        </li>
        <li>
          <UiElementsIcon name="prime:whatsapp" class="rounded bg-black" color="white" width="50" />
          <div class="contacts__details__socials__item">
            <h6>Call us</h6>
            <small>{{ contactUs.email }}</small>
          </div>
        </li>
        <li>
          <UiElementsIcon name="ph:rss" class="rounded bg-black" color="white" width="50" />
          <div class="contacts__details__socials__item">
            <h6>Find us</h6>
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
    <form class="contacts__form">
      <label>
        <p>First name</p>
        <input type="text" />
      </label>
      <label>
        <p>Last name</p>
        <input type="text" />
      </label>
      <label>
        <p>Email</p>
        <input type="text" />
      </label>
      <label>
        <p>Phone</p>
        <input type="text" />
      </label>
      <label class="message">
        <p>Message</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </label>
      <UiElementsButton button-class="color__white">Send Message</UiElementsButton>
    </form>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  font-family: var(--second-family);
  display: flex;
  justify-content: space-between;
  color: var(--black);

  & .titles {
    border-bottom: 1px solid rgba(18, 17, 17, 0.143);
  }
  &__details {
    width: min(100%, 401px);
    display: grid;
    row-gap: 3.2rem;

    &__socials {
      display: grid;

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
  &__form {
    width: min(100%, 795px);
    font-weight: 400;
    font-size: 18px;
    background-color: var(--light-grey);
    padding: 4.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 5.2rem;
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
}
</style>
