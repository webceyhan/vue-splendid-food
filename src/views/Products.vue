<template>
  <main>
    <div class="container py-5">
      <h1 class="mb-3">Products</h1>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <div class="col" v-for="food in foods" :key="food.id">
          <div class="card bg-dark text-white rounded-5">
            <div class="card-image-top text-center pt-3">
              <i :class="`icofont-10x icofont-${food.icon} text-success`"></i>
            </div>

            <div class="card-body p-4">
              <h4 class="card-title mb-4">{{ food.name }}</h4>

              <dl class="row mb-4">
                <hr />
                <dt class="col-sm-5">Price:</dt>
                <dd class="col-sm-7">${{ food.price }}</dd>
                <hr />
                <dt class="col-sm-5">Type:</dt>
                <dd class="col-sm-7">{{ food.type }}</dd>
              </dl>

              <div class="input-group input-group-sm">
                <input type="number" class="form-control" value="1" />
                <button
                  class="
                    btn btn-primary
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-fill
                  "
                >
                  Add
                  <i class="icofont-cart-alt icofont-2x ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "@/store";

export default {
  computed: {
    foods() {
      return store.foods;
    },
  },
};
</script>
