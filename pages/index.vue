<script setup lang="ts">
interface ITodos {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const title = "Index Test";
const { data: products, error } = await useFetch<ITodos[]>(
  "https://jsonplaceholder.typicode.com/posts",
);

console.log();
</script>

<template>
  <div>
    <h1 class="text-3xl text-center font-bold underline">
      {{ title }}
    </h1>
    <div class="products" v-for="product in products" :key="product.id">
      <h4>{{ product.title }}</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  font-size: 14px;
}
</style>
