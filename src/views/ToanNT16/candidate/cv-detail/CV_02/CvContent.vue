<template>
  <div class="row cv-content-container">
    <div class="col-12"><AcademicLevel /></div>
    <div class="col-12"><WorkExperience /></div>
    <div class="col-12"><Activities /></div>
    <div class="col-12"><ParticipantProjects /></div>
    <div class="col-12"><MoreInformation /></div>
  </div>
</template>

<script>
import AcademicLevel from "./Content/AcademicLevel.vue";
import WorkExperience from "./Content/WorkExperience.vue";
import Activities from "./Content/Activities.vue";
import ParticipantProjects from "./Content/ParticipantProjects.vue";
import MoreInformation from "./Content/MoreInformation.vue";

export default {
  name: "CvContent",
  components: {
    AcademicLevel,
    WorkExperience,
    Activities,
    ParticipantProjects,
    MoreInformation,
  },
};
</script>

<style scoped>
.cv-content-container {
  background-color: #ffffff;
}
</style>