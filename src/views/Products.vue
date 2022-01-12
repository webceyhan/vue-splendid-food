<template>
  <main>
    <div class="container py-5">
      <h1 class="mb-3">Products</h1>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <!-- card - Carrots -->
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
                <dt class="col-sm-5">Type:</dt>
                <dd class="col-sm-7">Vegetable</dd>
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

        <!-- card - Pineapples -->
        <div class="col">
          <div class="card bg-dark text-white rounded-5">
            <div class="card-image-top text-center pt-3">
              <i class="icofont-10x icofont-pineapple text-danger"></i>
            </div>

            <div class="card-body p-4">
              <h4 class="card-title mb-4">Pineapples</h4>

              <dl class="row mb-4">
                <hr />
                <dt class="col-sm-5">Price:</dt>
                <dd class="col-sm-7">$1.62</dd>
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

        <!-- card - Sausages -->
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

        <!-- card - Cherries -->
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
