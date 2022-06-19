<template>
  <div class="row cv-main-container">
    <div class="col-12"><CvTop /></div>
    <div class="col-12"><CvRight /></div>
  </div>
</template>

<script>
import CvTop from "./CvTop.vue";
import CvRight from "./CvRight.vue";

export default {
  name: "CvMain",
  components: {
    CvTop,
    CvRight,
  },
};
</script>

<style scoped>
.cv-main-container {
  background-color: #ffffff;
  border-right: 1rem solid #8fd4cf;
}
</style>