<template>
  <div class="row">
    <div class="col-4">
      <CvMain />
    </div>
    <div class="col-8">
      <CvContent />
    </div>
  </div>
</template>

<script>
import CvMain from "./CV_02/CvMain.vue";
import CvContent from "./CV_02/CvContent.vue";

export default {
  name: "CV_02",
  components: {
    CvMain,
    CvContent,
  },
};
</script>

<style>
</style>