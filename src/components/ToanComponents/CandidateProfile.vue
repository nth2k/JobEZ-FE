<template>
  <div>
    <Header />
    <SearchHeader />
    <CandidateHeader />
    <CandidateSummary />
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/profile/Header.vue";
import CandidateHeader from "@/views/ToanNT16/candidate/profile/CandidateHeader.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import CandidateSummary from "@/views/ToanNT16/candidate/profile/candidate_summary/CandidateSummary.vue";

export default {
  name: "CandidateProfile",
  components: {
    Header,
    CandidateHeader,
    SearchHeader,
    CandidateSummary,
  },
};
</script>

<style>
</style>