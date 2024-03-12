<script setup lang="ts">
import { h } from "#imports";

const props = defineProps({
  small: String,
  huge: String,
  contentText: String,
  contentSize: {
    type: String,
    default: "1.8rem",
  },

  colorHuge: {
    type: String,
    default: "white",
  },
  textPosition: {
    type: String,
    default: "center",
  },
  isSmallShow: {
    type: Boolean,
    default: false,
  },
  titleLevel: {
    type: Number,
    default: 2,
  },
});

const hTag = h(`h${props.titleLevel}`, null, props.huge);

const titleTag = defineComponent({
  render() {
    return hTag;
  },
});
</script>

<template>
  <div class="titles">
    <h4 class="titles__sub" v-if="isSmallShow">{{ small }}</h4>
    <titleTag />
    <p v-if="contentText">{{ contentText }}</p>
  </div>
</template>

<style scoped lang="scss">
.font-second {
  font-family: var(--second-family);
}
.font-third {
  font-family: var(--third-family);
}
.titles {
  display: grid;
  row-gap: 2.4rem;
  text-align: v-bind(textPosition);
  color: v-bind(colorHuge);
  margin-bottom: 3rem;
  & p {
    font-size: v-bind(contentSize);
  }

  &__sub {
    color: var(--light-green);
  }
}
</style>
