<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-success">
    <div class="container-fluid">
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <i class="navbar-toggler-icon"></i>
      </button>

      <!-- collapsible menu -->
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav align-items-md-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span class="d-flex align-items-center">
                <Icon name="spoon-and-fork" sm />

                <span class="ms-2">Home</span>
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">
              Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/past-orders" class="nav-link">
              Past Orders
            </router-link>
          </li>
        </ul>

        <!-- cart -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              data-bs-toggle="offcanvas"
              data-bs-target="#cart"
            >
              <span class="d-flex align-items-center">
                <Icon name="cart-alt" sm />

                <span class="ms-2">Cart ({{ cartItemCount }})</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import Icon from "./Icon";

export default {
  components: { Icon },
  computed: mapGetters("cart", {
    cartItemCount: "getItemCount",
  }),
};
</script>
