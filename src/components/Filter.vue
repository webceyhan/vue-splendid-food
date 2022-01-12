<template>
  <div class="btn-group" role="group">
    <template v-for="(option, i) in options" :key="i">
      <input
        type="radio"
        class="btn-check"
        name="filter"
        :id="`filter-${i}`"
        :value="option"
        :checked="option === modelValue"
        @change="$emit('update:modelValue', option)"
        autocomplete="off"
      />
      <label :for="`filter-${i}`" class="btn btn-outline-primary">
        {{ option }}
      </label>
    </template>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: ["modelValue", "options"],
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
