<template>
  <div class="row">
    <div class="col-12 mt-4">
      <div><BasicInfomation /></div>
    </div>
    <div class="col-12"><CareerGoal /></div>
    <div class="col-12"><Skills /></div>
    <div class="col-12"><Award /></div>
    <div class="col-12"><Certificate /></div>
    <div class="col-12"><Favorites /></div>
    <div class="col-12 mb-5"><References /></div>
  </div>
</template>

<script>
import BasicInfomation from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right/BasicInfomation.vue";
import CareerGoal from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right/CareerGoal.vue";
import Skills from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right/Skills.vue";
import Award from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right/Award.vue";
import Certificate from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right/Certificate.vue";
import Favorites from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right/Favorites.vue";
import References from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right/References.vue";

export default {
  name: "Right",
  components: {
    BasicInfomation,
    CareerGoal,
    Skills,
    Award,
    Certificate,
    Favorites,
    References,
  },
};
</script>

<style>
</style>