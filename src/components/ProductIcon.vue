<template>
  <Icon v-bind="bindings" />
</template>

<script>
import Icon from "./Icon";

const colorMap = {
  vegetable: "success",
  fruit: "danger",
  meat: "warning",
};

export default {
  components: { Icon },
  props: ["product"],
  computed: {
    bindings() {
      return {
        ...this.$attrs,
        name: this.product.icon,
        class: `text-${colorMap[this.product.type]}`,
      };
    },
  },
};
</script>
