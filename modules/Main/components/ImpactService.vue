<script setup lang="ts">
const services = [
  {
    title: "Content Marketing",
    content:
      "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic",
    icon: "jam:pen-f",
  },
  {
    title: "Graphic Design",
    content:
      "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
    icon: "ant-design:ant-design-outlined",
  },
  {
    title: "Digital Marketing",
    content:
      "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing",
    icon: "fluent:speaker-2-28-regular",
  },
  {
    title: "Web Design",
    content:
      "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.",
    icon: "mdi:paint-outline",
  },
  {
    title: "IT Consulting",
    content:
      "IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services",
    icon: "system-uicons:user-add",
  },
  {
    title: "Brand Identity",
    content:
      "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.",
    icon: "material-symbols-light:diamond-outline",
  },
];
</script>

<template>
  <div class="digital__service">
    <div class="digital__service__titles">
      <h4>Our Services</h4>
      <h2>High-impact services for your business</h2>
    </div>
    <div class="digital__service__list">
      <article
        v-for="{ title, content, icon } in services"
        :key="title"
        class="digital__service__list__item">
        <UiElementsIcon :name="icon" class="rounded bg-black" color="white" width="50" />
        <div class="digital__service__list__item__desctiption">
          <h5>{{ title }}</h5>
          <p>{{ content }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.digital__service {
  display: grid;
  row-gap: 8rem;
  color: var(--black);
  &__titles {
    width: min(100%, 695px);
    justify-self: center;
    text-align: center;
    display: grid;
    row-gap: 2.4rem;

    & h4 {
      color: var(--light-green);
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 6.6rem;
    row-gap: 8rem;
    &__item {
      display: grid;
      row-gap: 6.2rem;
      padding: 4.5rem;
      width: 422px;
      background-color: var(--light-grey);

      &__desctiption {
        display: grid;
        row-gap: 1.5rem;
      }
    }
  }
}
</style>
