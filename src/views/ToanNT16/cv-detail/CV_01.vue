<template>
  <div class="container-fluid">
    <div class="row cv-container">
      <div class="col-12"></div>
      <div class="col-8 px-0">
        <div class="col-12"><Header /></div>
        <!-- CV -->
        <div class="row">
          <!-- Right -->
          <div class="col-5"><Right /></div>
          <!-- Content -->
          <div class="col-7 content-container"><CvContent /></div>
        </div>
      </div>
      <!-- CV liên quan -->
      <div class="col-4">
        <RelatedCV />
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./CV_01/Header.vue";
import Right from "./CV_01/Right.vue";
import CvContent from "./CV_01/CvContent.vue";
import RelatedCV from "./CV_01/RelatedCV.vue";

export default {
  name: "CV_01",
  components: {
    Header,
    Right,
    CvContent,
    RelatedCV,
  },
};
</script>

<style scoped>
.cv-container {
  margin-left: 12rem;
  margin-right: 12rem;
}

.content-container {
  margin-top: -2rem;
}
</style>