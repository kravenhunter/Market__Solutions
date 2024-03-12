<template>
  <ul class="cover__list">
    <slot name="list" />
  </ul>
</template>

<style scoped lang="scss">
.cover__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  & li p {
    opacity: 0 !important;
  }
}
</style>
