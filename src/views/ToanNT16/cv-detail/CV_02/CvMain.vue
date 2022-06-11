<template>
  <div class="row">
    <div class="col-12"><CvTop /></div>
    <div class="col-12"><CvContent /></div>
  </div>
</template>

<script>
import CvTop from "./CvTop.vue";
import CvContent from "./CvContent.vue";

export default {
  name: "CvMain",
  components: {
    CvTop,
    CvContent,
  },
};
</script>

<style>
</style>