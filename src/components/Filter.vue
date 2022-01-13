<template>
  <div class="btn-group" role="group">
    <template v-for="(option, i) in prefixedOptions" :key="i">
      <input
        type="radio"
        class="btn-check"
        name="filter"
        :id="`filter-${i}`"
        :value="option != 'all' ? option : null"
        :checked="option === modelValue"
        @change="$emit('update:modelValue', option)"
        autocomplete="off"
      />
      <label
        :for="`filter-${i}`"
        class="btn btn-outline-primary text-capitalize"
      >
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
    prefixedOptions() {
      return ["all", ...this.options];
    },
  },
};
</script>
