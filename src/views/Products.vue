<template>
  <main>
    <div class="container py-5">
      <h1 class="mb-3">Products</h1>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <div class="col" v-for="food in foods" :key="food.id">
          <ProductCard :product="food" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "@/store";
import ProductCard from "@/components/ProductCard";

export default {
  components: { ProductCard },
  computed: {
    foods() {
      return store.foods;
    },
  },
};
</script>
