<template>
  <main>
    <div class="container py-5">
      <header class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0">Products</h1>
        <Filter :options="types" v-model="productType" />
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
import { mapState, mapMutations } from "vuex";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";

export default {
  components: { Filter, ProductCard },
  data() {
    return { productType: "all" };
  },
  watch: {
    productType(type) {
      this.$store.dispatch("products/loadProducts", type);
    },
  },
  computed: mapState("products", {
    types: "types",
    products: "all",
  }),
  methods: mapMutations("cart", {
    addToCart: "addItem",
  }),
  created() {
    this.$store.dispatch("products/loadTypes");
    this.$store.dispatch("products/loadProducts");
  },
};
</script>
