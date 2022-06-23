<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 p-0 position-sticky"><Navigator /></div>
      <div class="col-10">
        <div class="mb-2"><Header /></div>
        <div><Suggesstions /></div>
        <div><ListOfCV /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import Navigator from "@/views/ToanNT16/candidate/candidate_management/Navigator.vue";
import Suggesstions from "@/views/ToanNT16/candidate/cv_menu/Suggesstions.vue";
import ListOfCV from "@/views/ToanNT16/candidate/cv_menu/ListOfCV.vue";

export default {
  name: "CVs",
  components: {
    Header,
    Navigator,
    Suggesstions,
    ListOfCV,
  },
};
</script>

<style>
</style>