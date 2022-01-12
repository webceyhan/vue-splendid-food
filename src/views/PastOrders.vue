<template>
  <main>
    <div class="container py-5">
      <h1 class="mb-3">Past Orders</h1>

      <!-- orders table -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th>
              <!-- image -->
            </th>
            <th class="w-25">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>
              <!-- actions -->
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="align-middle" v-for="order in orders" :key="order.id">
            <td>
              <ProductIcon :product="order" />
            </td>
            <td>{{ order.name }}</td>
            <td>${{ order.price }}</td>
            <td>{{ order.quantity }}</td>
            <td>${{ order.price * order.quantity }}</td>
            <td>
              <button class="btn btn-primary btn-sm d-flex align-items-center">
                Add
                <Icon name="cart-alt ms-2" sm />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import store from "@/store";
import Icon from "@/components/Icon";
import ProductIcon from "@/components/ProductIcon";

export default {
  components: { Icon, ProductIcon },
  computed: {
    orders() {
      return store.orders;
    },
  },
};
</script>
