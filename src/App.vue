<template>
  <Navigation />

  <Cart />
  <router-view />
</template>

<script>
import Navigation from "@/components/Navigation";
import Cart from "@/components/Cart";

export default {
  components: { Navigation, Cart },
};
</script>

