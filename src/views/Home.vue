<template>
  <!-- splash -->
  <section id="splash">
    <div class="container text-center p-5">
      <h1 class="text-danger m-4">Splendid Food</h1>
    </div>
  </section>

  <!-- recommended products -->
  <main>
    <div class="container py-5">
      <h1 class="mb-3">Recommended</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- card 1 -->
        <div class="col">
          <div class="card bg-dark text-white rounded-5">
            <div class="card-image-top text-center pt-3">
              <i class="icofont-10x icofont-carrot text-success"></i>
            </div>

            <div class="card-body p-4">
              <h4 class="card-title mb-4">Carrots</h4>

              <dl class="row mb-4">
                <hr />
                <dt class="col-sm-5">Price:</dt>
                <dd class="col-sm-7">$4.82</dd>
                <hr />
                <dt class="col-5">Type:</dt>
                <dd class="col-7">Vegetable</dd>
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

        <!-- card 2 -->
        <div class="col">
          <div class="card bg-dark text-white rounded-5">
            <div class="card-image-top text-center pt-3">
              <i class="icofont-10x icofont-sausage text-warning"></i>
            </div>

            <div class="card-body p-4">
              <h4 class="card-title mb-4">Sausages</h4>

              <dl class="row mb-4">
                <hr />
                <dt class="col-sm-5">Price:</dt>
                <dd class="col-sm-7">$3.69</dd>
                <hr />
                <dt class="col-sm-5">Type:</dt>
                <dd class="col-sm-7">Meat</dd>
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

        <!-- card 3 -->
        <div class="col">
          <div class="card bg-dark text-white rounded-5">
            <div class="card-image-top text-center pt-3">
              <i class="icofont-10x icofont-cherry text-danger"></i>
            </div>

            <div class="card-body p-4">
              <h4 class="card-title mb-4">Cherries</h4>

              <dl class="row mb-4">
                <hr />
                <dt class="col-sm-5">Price:</dt>
                <dd class="col-sm-7">$1.04</dd>
                <hr />
                <dt class="col-sm-5">Type:</dt>
                <dd class="col-sm-7">Fruit</dd>
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
export default {};
</script>
