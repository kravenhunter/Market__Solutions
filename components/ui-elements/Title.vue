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
    default: true,
  },
  titleLevel: {
    type: Number,
    default: 2,
  },
});

//const hTag = h(`h${props.titleLevel}`, { style: { color: "black" } }, props.huge);
const hTag = h(`h${props.titleLevel}`, null, props.huge);

const titleTag = defineComponent({
  render() {
    return hTag;
  },
});

// const attrs =  useAttrs()
//  const slots = useSlots()
// const titleTag = defineComponent({
//   render() {
//     return h(`h2`,   {
//      ...attrs,
//      class: attrs.class.includes('red') ? 'blue' : ''
//    },
//    slots.default())
// return () => h('div', null, slots.default({ text: text.value }))
//   }
// })

// h('div')
// h('div', { id: 'foo' })

// both attributes and properties can be used in props
// Vue automatically picks the right way to assign it
// h('div', { class: 'bar', innerHTML: 'hello' })

// props modifiers such as `.prop` and `.attr` can be added
// with `.` and `^` prefixes respectively
// h('div', { '.name': 'some-name', '^width': '100' })

// // class and style have the same object / array
// // value support that they have in templates
// h('div', { class: [foo, { bar }], style: { color: 'red' } })

// // event listeners should be passed as onXxx
// h('div', { onClick: () => {} })

// // children can be a string
// h('div', { id: 'foo' }, 'hello')

// // props can be omitted when there are no props
// h('div', 'hello')
// h('div', [h('span', 'hello')])

// // children array can contain mixed vnodes and strings
// h('div', ['hello', h('span', 'hello')])
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
