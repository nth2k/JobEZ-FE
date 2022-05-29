<template>
  <div>
    <div class="container pt-4 summary-container">
      <div class="row">
        <div class="col-12 col-xl-8"><CandidateProfileOnline /></div>
        <div class="col-12 col-xl-4"><CandidateOverview /></div>
        <div class="col-12 mt-5"><RelatedCandidates /></div>
      </div>
    </div>
  </div>
</template>

<script>
import CandidateOverview from "./CandidateOverview.vue";
import CandidateProfileOnline from "./CandidateProfileOnline.vue";
import RelatedCandidates from "./RelatedCandidates.vue"

export default {
  name: "CandidateSummary",
  components: {
    CandidateOverview,
    CandidateProfileOnline,
    RelatedCandidates
  },
};
</script>

<style>
</style>