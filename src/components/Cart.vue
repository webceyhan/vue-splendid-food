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
      <p class="lead text-center p-5"><em>No items in cart</em></p>

      <!-- cart table -->
      <table class="table table-hover">
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
          <tr class="align-middle">
            <td>
              <i class="icofont-carrot icofont-2x text-success"></i>
            </td>
            <td>Carrot</td>
            <td>$1.00</td>
            <td class="text-center">1</td>
            <td>$1.00</td>
            <td class="text-end">
              <button class="btn-close btn-sm"></button>
            </td>
          </tr>
          <tr class="align-middle">
            <td>
              <i class="icofont-pineapple icofont-2x text-danger"></i>
            </td>
            <td>Pineapple</td>
            <td>$1.50</td>
            <td class="text-center">1</td>
            <td>$1.00</td>
            <td class="text-end">
              <button class="btn-close btn-sm"></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex align-items-center justify-content-between pt-2">
        <!-- cart total -->
        <div><strong>Total:</strong> $1.00</div>

        <!-- checkout button -->
        <button class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </aside>
</template>