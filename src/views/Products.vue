<template>
  <main>
    <div class="container py-5">
      <header class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0">Products</h1>
        <Filter :options="productTypes" v-model="productType" />
      </header>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <div class="col" v-for="product in products" :key="product.id">
          <ProductCard :product="product" @addToCart="addToCart($event)" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";

export default {
  components: { Filter, ProductCard },
  data() {
    return { productType: "all" };
  },
  computed: {
    ...mapGetters("products", {
      productTypes: "getTypes",
      productsByType: "getByType",
    }),
    products() {
      return this.productsByType(this.productType);
    },
  },
  methods: mapMutations("cart", {
    addToCart: "addItem",
  }),
};
</script>
