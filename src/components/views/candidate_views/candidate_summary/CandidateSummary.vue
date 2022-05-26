<template>
  <div>
    <div class="container pt-4 summary-container">
      <div class="row">
        <div class="col-12 col-xl-8"><CandidateOverview /></div>
        <div class="col-12 col-xl-4"><CandidateProfileOnline /></div>
      </div>
    </div>
  </div>
</template>

<script>
import CandidateOverview from "./CandidateOverview.vue";
import CandidateProfileOnline from "./CandidateProfileOnline.vue";

export default {
  name: "CandidateSummary",
  components: {
    CandidateOverview,
    CandidateProfileOnline,
  },
};
</script>

<style>
</style>