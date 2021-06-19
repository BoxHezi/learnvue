<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    timeInterval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>
