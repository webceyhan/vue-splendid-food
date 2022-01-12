<template>
  <!-- splash -->
  <section id="splash">
    <div class="container text-center p-5">
      <h1 class="text-danger m-4">Splendid Food</h1>
    </div>
  </section>

  <!-- recommended products -->
  <main>
    <div class="container py-5">
      <h1 class="mb-3">Recommended</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="food in recommendedFoods" :key="food.id">
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
    recommendedFoods:() => store.getRecommendedProducts()
  },
};
</script>
