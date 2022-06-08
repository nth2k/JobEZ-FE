<template>
  <div class="row">
    <div class="col-12 mb-4"><Education /></div>
    <div class="col-12 mb-4"><WorkExperience /></div>
    <div class="col-12 mb-4"><Activities /></div>
    <div class="col-12 mb-4"><ParticipantProjects /></div>
    <div class="col-12"><MoreInformation /></div>
  </div>
</template>

<script>
import Education from "@/views/ToanNT16/cv-detail/CV_01/CV_Content/Education.vue";
import WorkExperience from "@/views/ToanNT16/cv-detail/CV_01/CV_Content/WorkExperience.vue";
import Activities from "@/views/ToanNT16/cv-detail/CV_01/CV_Content/Activities.vue";
import ParticipantProjects from "@/views/ToanNT16/cv-detail/CV_01/CV_Content/ParticipantProjects.vue";
import MoreInformation from "@/views/ToanNT16/cv-detail/CV_01/CV_Content/MoreInformation.vue";

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

<style>
</style>