<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__top__logo">
        <IconsLogo />
        <div class="footer__top__logo__details">
          <p>
            Мы - команда разработчиков и цифровых новаторов, объединенных стремлением к
            совершенству.
          </p>
        </div>
      </div>
      <div class="footer__top__pages">
        <ul>
          <li>Страницы</li>
          <li><NuxtLink to="/">Чем занимаемся</NuxtLink></li>
          <li><NuxtLink to="/servicesview">Услуги</NuxtLink></li>
          <li><NuxtLink to="/seoview">Seo</NuxtLink></li>
          <li><NuxtLink to="/contactview">Контакты</NuxtLink></li>
          <li><NuxtLink to="/portfoliosview">Портфолио</NuxtLink></li>
        </ul>
        <!--  <ul>
          <li>Utility Pages</li>
          <li>Style Guide</li>
          <li>Instruction</li>
          <li>License</li>
          <li>Changelog</li>
          <li>Password Protected</li>
        </ul> -->
      </div>
      <div class="footer__top__subscribe">
        <h6>Subscribe</h6>
        <form>
          <input type="text" placeholder="Введите свою почту" />
          <button type="button">Subscribe</button>
        </form>
      </div>
    </div>

    <ul class="footer__bottom">
      <li class="footer__bottom__contacts">
        <h6>Copyright by</h6>
        <small>Designed by Sergio Below</small>
      </li>
      <li class="footer__bottom__contacts">
        <h6>Напишите нам</h6>
        <small>wiz-solution-design@yandex.ru</small>
      </li>
      <li class="footer__bottom__contacts">
        <h6>Адрес</h6>
        <small>г. Брянск, ул. Дуки 60</small>
      </li>
      <li class="footer__bottom__socials">
        <UiElementsIcon name="uit:facebook-f" class="rounded bg-white" />
        <UiElementsIcon name="iconoir:instagram" class="rounded bg-white" />
        <UiElementsIcon name="ph:linkedin-logo-light" class="rounded bg-white" />
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding-top: 10rem;
  padding-bottom: 6rem;
  &__top,
  &__top__pages {
    display: flex;

    &__logo {
      width: min(100%, 357px);
      display: grid;
      row-gap: 2.4rem;
    }
  }
  &__top {
    justify-content: space-between;
    padding-bottom: 10rem;
    &__pages {
      column-gap: 10rem;
      & ul {
        display: grid;
        row-gap: 1.6rem;
        font-size: 1.6rem;
        & li:nth-child(1) {
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 2.4rem;
        }
      }
    }
    &__subscribe {
      width: min(100%, 433px);
      & h6 {
        margin-bottom: 2rem;
      }
      & form,
      button {
        border-radius: 50px;
        padding: 1rem;
      }
      & form {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: 1rem;
        font-weight: 400;
        font-size: 18px;
        background-color: var(--white-color);
        color: var(--light-black);
        & input {
          padding-left: 1.5rem;

          &:focus {
            outline-width: 0;
          }
        }
        & button {
          cursor: pointer;
          background-color: var(--light-black);
          color: var(--white-color);
          padding: 1.2rem;
        }
      }
      @media (max-width: 455px) {
        display: none;
      }
    }
    @media (max-width: 1024px) {
      display: grid;
      justify-items: center;
      row-gap: 5rem;
      &__subscribe ul {
        display: none;
      }
    }
  }

  &__bottom {
    display: flex;
    border-top: 1px solid rgba(255, 255, 255, 0.296);
    justify-content: space-between;
    padding-top: 2.9rem;
    &__contacts {
      display: grid;
      row-gap: 1.6rem;
    }
    &__socials {
      display: flex;
      column-gap: 2rem;
    }
    @media (max-width: 780px) {
      display: grid;
      justify-content: center;
      row-gap: 5rem;
    }
  }
}
</style>
