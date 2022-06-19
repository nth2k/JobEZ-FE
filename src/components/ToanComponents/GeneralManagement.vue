<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 p-0 position-sticky"><Navigator /></div>
      <div class="col-10">
        <div class="mb-2"><Header /></div>
        <div><Suggesstions /></div>
        <div class="mb-2"><SuitableJobs /></div>
        <div class="mb-5"><CurriculumVitae /></div>
        <div><InformationRecruitment /></div>
        <div class="mb-5"><News /></div>
        <div class="mb-5"><LookupInformation /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import Navigator from "@/views/ToanNT16/candidate/candidate_management/Navigator.vue";
import Suggesstions from "@/views/ToanNT16/candidate/candidate_management/Suggesstions.vue";
import SuitableJobs from "@/views/ToanNT16/candidate/candidate_management/SuitableJobs.vue";
import CurriculumVitae from "@/views/ToanNT16/candidate/candidate_management/CurriculumVitae.vue";
import InformationRecruitment from "@/views/ToanNT16/candidate/candidate_management/InformationRecruitment.vue";
import News from "@/views/ToanNT16/candidate/candidate_management/News.vue";
import LookupInformation from "@/views/ToanNT16/candidate/candidate_management/LookupInformation.vue";
export default {
  name: "GeneralManagement",
  components: {
    Header,
    Navigator,
    Suggesstions,
    SuitableJobs,
    CurriculumVitae,
    InformationRecruitment,
    News,
    LookupInformation,
  },
};
</script>

<style>
</style>