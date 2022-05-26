<template>
  <div>
    <Header />
    <SearchHeader />
    <CandidateHeader />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchHeader from "./SearchHeader.vue";
import CandidateHeader from "./CandidateHeader.vue";

export default {
  name: "CandidateProfile",
  components: {
    Header,
    SearchHeader,
    CandidateHeader,
  },
};
</script>

<style>
</style>