<script setup lang="ts">
import Title from "~/components/ui-elements/Title.vue";

interface IContentProps {
  title: string;
  content: string;
  image: string;
}
interface IProps {
  landing: IContentProps;
}

defineProps<IProps>();
</script>

<template>
  <article v-if="landing" class="lending">
    <div class="lending__details">
      <Title
        :title-level="3"
        class="font-second"
        :huge="landing.title"
        :content-text="landing.content"
        text-position="initial" />
      <UiElementsButton button-class="color__white">
        <UiElementsIcon name="oui:arrow-right" class="rounded bg-black" color="white" />
        <p class="trial">Расчитать стоимость</p>
      </UiElementsButton>
    </div>

    <div class="lending__cover">
      <NuxtImg :src="landing.image" width="644" :alt="landing.title" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.lending {
  display: flex;
  justify-content: space-between;
  padding: 10rem 0;
  &__details {
    width: min(100%, 681px);
    & .titles {
      margin-bottom: 3rem;
    }
  }
}
</style>
