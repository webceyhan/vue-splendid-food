<template>
  <main>
    <div class="container py-5">
      <header class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0">Products</h1>

        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <template v-for="(type, i) in productTypes" :key="i">
            <input
              :id="`btnradio-${i}`"
              type="radio"
              class="btn-check"
              name="btnradio"
              :value="type"
              v-model="productType"
              autocomplete="off"
            />
            <label :for="`btnradio-${i}`" class="btn btn-outline-primary">{{
              type
            }}</label>
          </template>
        </div>
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
import store from "@/store";
import ProductCard from "@/components/ProductCard";

export default {
  components: { ProductCard },
  data() {
    return { productType: "all" };
  },
  computed: {
    productTypes: () => store.getProductTypes(),
    products() {
      if (this.productType === "all") {
        return store.getProducts();
      }

      return store
        .getProducts()
        .filter(({ type }) => type === this.productType);
    },
  },
  methods: {
    addToCart: (item) => store.addToCart(item),
  },
};
</script>
