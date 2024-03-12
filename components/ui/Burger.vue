<template>
  <div class="burger">
    <div class="burger__close">
      <slot name="close" />
    </div>
    <ul class="burger__nav">
      <slot name="list" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.burger {
  width: 30vw;
  height: 100vh;

  display: grid;
  align-content: start;
  background-color: white;
  color: black;
  padding: 2rem;

  &__close {
    justify-self: end;
  }
  &__nav {
    justify-self: center;
    display: grid;

    row-gap: 5rem;
  }
}
</style>
