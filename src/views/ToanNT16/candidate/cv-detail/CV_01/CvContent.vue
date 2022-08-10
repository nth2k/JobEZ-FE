<template>
  <div class="row view-content-container">
    <div class="col-12"><Education /></div>
    <div class="col-12"><WorkExperience /></div>
    <div class="col-12"><Activities /></div>
    <div class="col-12"><ParticipantProjects /></div>
    <div class="col-12"><MoreInformation /></div>
  </div>
</template>

<script>
import Education from "@/views/ToanNT16/candidate/cv-detail/CV_01/CV_Content/Education.vue";
import WorkExperience from "@/views/ToanNT16/candidate/cv-detail/CV_01/CV_Content/WorkExperience.vue";
import Activities from "@/views/ToanNT16/candidate/cv-detail/CV_01/CV_Content/Activities.vue";
import ParticipantProjects from "@/views/ToanNT16/candidate/cv-detail/CV_01/CV_Content/ParticipantProjects.vue";
import MoreInformation from "@/views/ToanNT16/candidate/cv-detail/CV_01/CV_Content/MoreInformation.vue";

export default {
  name: "CvContent",
  components: {
    Education,
    WorkExperience,
    Activities,
    ParticipantProjects,
    MoreInformation,
  },
};
</script>

<style scoped>
.view-content-container {
  background-color: #f9f0e0;
}
</style>