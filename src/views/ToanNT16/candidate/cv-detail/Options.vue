<template>
  <div
    class="col-12 bg-secondary p-2 option-container"
    :class="{ invisible: isHiddenOptions }"
    @mouseover="isHiddenOptions = false"
    @mouseleave="isHiddenOptions = true"
  >
    <i
      class="fa fa-bars py-1 px-2 bg-white rounded mr-1"
      id="move"
      ref="move"
    ></i
    ><i
      class="fa fa-arrow-up py-1 px-2 bg-white rounded mr-1"
      aria-hidden="true"
      id="moveUp"
      ref="moveUp"
    ></i>
    <i
      class="fa fa-arrow-down py-1 px-2 bg-white rounded mr-1"
      aria-hidden="true"
      id="moveDown"
      ref="moveDown"
    ></i>
    <i
      class="fa fa-minus py-1 px-5 bg-danger rounded mr-1"
      aria-hidden="true"
      id="hidden"
      ref="hidden"
      @click="hidden"
      >Ẩn</i
    >
  </div>
</template>

<script>
export default {
  name: "Options",
  methods: {
    hidden() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<style>
</style>