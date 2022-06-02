<template>
  <div>
    <Header />
    <SearchHeader />
    <CandidateSummary />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchHeader from "../SearchHeader.vue";
import CandidateSummary from "./candidate_summary/CandidateSummary.vue";

export default {
  name: "CandidateProfile",
  components: {
    Header,
    SearchHeader,
    CandidateSummary,
  },
};
</script>

<style>
</style>