<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 p-0 position-sticky"><Navigator /></div>
      <div class="col-10">
        <div class="mb-2"><Header /></div>
        <div><Suggesstions /></div>
        <div><ListOfCoverLetter /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import Navigator from "@/views/ToanNT16/candidate/candidate_management/Navigator.vue";
import Suggesstions from "@/views/ToanNT16/candidate/cv_menu/Suggesstions.vue";
import ListOfCoverLetter from "@/views/ToanNT16/candidate/cover_letter/ListOfCoverLetter.vue";
export default {
  name: "CoverLetter",
  components: {
    Header,
    Navigator,
    Suggesstions,
    ListOfCoverLetter,
  },
};
</script>

<style>
</style>