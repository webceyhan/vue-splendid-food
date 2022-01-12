<template>
  <i :class="classes"></i>
</template>

<script>
export default {
  props: {
    name: String,
    color: String,
    sm: Boolean, // 2
    md: Boolean, // 4
    lg: Boolean, // 10
  },
  computed: {
    size() {
      return this.sm ? 2 : this.lg ? 10 : 4;
    },
    classes() {
      return `icofont-${this.name} icofont-${this.size}x`;
    },
  },
};
</script>
