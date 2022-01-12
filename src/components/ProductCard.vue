<template>
  <div class="card bg-dark text-white rounded-5">
    <div class="card-image-top text-center pt-3">
      <Icon :name="product.icon" lg />
    </div>

    <div class="card-body p-4">
      <h4 class="card-title mb-4">{{ product.name }}</h4>

      <dl class="row mb-4">
        <hr />
        <dt class="col-sm-5">Price:</dt>
        <dd class="col-sm-7">${{ product.price }}</dd>
        <hr />
        <dt class="col-sm-5">Type:</dt>
        <dd class="col-sm-7">{{ product.type }}</dd>
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
</template>

<script>
import Icon from "./Icon";

export default {
  components: { Icon },
  props: ["product"],
};
</script>

<style>
</style>