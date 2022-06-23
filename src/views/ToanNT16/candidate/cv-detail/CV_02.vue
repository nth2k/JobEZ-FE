<template>
  <div class="container cv-02-container p-3">
    <div class="row">
      <div class="col-8 cv-container px-4 py-3">
        <div class="row">
          <div class="col-6">
            <CvMain />
          </div>

          <div class="col-6">
            <CvContent />
          </div>
        </div>
      </div>

      <div class="col-4">
        <RelatedCV />
      </div>
    </div>
  </div>
</template>

<script>
import CvMain from "./CV_02/CvMain.vue";
import CvContent from "./CV_02/CvContent.vue";
import RelatedCV from "./CV_02/Related_CV/RelatedCV.vue";

export default {
  name: "CV_02",
  components: {
    CvMain,
    CvContent,
    RelatedCV,
  },
};
</script>

<style scoped>
.cv-container {
  background-color: #8fd4cf;
}
</style>