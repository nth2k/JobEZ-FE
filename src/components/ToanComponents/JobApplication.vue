<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 p-0 position-sticky"><Navigator /></div>
      <div class="col-10">
        <div class="mb-2"><Header /></div>
        <div><Suggesstions /></div>
        <div><ListOfJobApplication /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import Navigator from "@/views/ToanNT16/candidate/candidate_management/Navigator.vue";
import Suggesstions from "@/views/ToanNT16/candidate/cv_menu/Suggesstions.vue";
import ListOfJobApplication from "@/views/ToanNT16/candidate/job_application/ListOfJobApplication.vue";
export default {
  name: "JobApplication",
  components: {
    Header,
    Navigator,
    Suggesstions,
    ListOfJobApplication,
  },
};
</script>

<style>
</style>