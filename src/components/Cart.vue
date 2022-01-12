<template>
  <aside
    id="cart"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    data-bs-scroll="true"
    data-bs-backdrop="false"
  >
    <div class="offcanvas-header bg-dark text-white">
      <h6 class="d-flex align-items-center m-0">
        <i class="icofont-cart-alt icofont-2x me-2"></i>
        Cart
      </h6>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>

    <div class="offcanvas-body bg-light">
      <!-- cart empty message -->
      <p v-if="isEmpty" class="lead text-center p-5">
        <em>No items in cart</em>
      </p>

      <!-- cart table -->
      <table v-else class="table table-hover">
        <thead>
          <tr>
            <th>
              <!-- image -->
            </th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>
              <!-- actions -->
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="align-middle" v-for="item in cart" :key="item.id">
            <td>
              <ProductIcon :product="item" sm />
            </td>
            <td>{{ item.name }}</td>
            <td>${{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.price * item.quantity }}</td>

            <td class="text-end">
              <button class="btn-close btn-sm"></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex align-items-center justify-content-between pt-2">
        <!-- cart total -->
        <div><strong>Total:</strong> ${{ total }}</div>

        <!-- checkout button -->
        <button class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </aside>
</template>

<script>
import store from "@/store";
import ProductIcon from "@/components/ProductIcon";

export default {
  components: { ProductIcon },
  computed: {
    cart() {
      return Object.values(store.cart);
    },
    total() {
      return this.cart
        .reduce((sum, item) => sum + +item.price * item.quantity, 0)
        .toFixed(2);
    },
    isEmpty() {
      return this.cart.length === 0;
    },
  },
};
</script>
