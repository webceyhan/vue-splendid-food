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
          <tr class="align-middle">
            <td>
              <i class="icofont-carrot icofont-4x text-success"></i>
            </td>
            <td>Carrot</td>
            <td>$1.00</td>
            <td>1</td>
            <td>$1.00</td>
            <td>
              <button class="btn btn-primary btn-sm d-flex align-items-center">
                Add
                <i class="icofont-cart-alt icofont-2x ms-2"></i>
              </button>
            </td>
          </tr>
          <tr class="align-middle">
            <td>
              <i class="icofont-cherry icofont-4x text-danger"> </i>
            </td>
            <td>Cherry</td>
            <td>$0.50</td>
            <td>10</td>
            <td>$5.00</td>
            <td>
              <button class="btn btn-primary btn-sm d-flex align-items-center">
                Add
                <i class="icofont-cart-alt icofont-2x ms-2"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {};
</script>
