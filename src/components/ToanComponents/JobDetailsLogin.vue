<template>
  <div>
    <Header />
    <SearchHeader />
    <CandidateNavigator />
    <BoxTiki />
    <JobContainer />
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/profile/Header.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import CandidateNavigator from "@/views/ToanNT16/profile/CandidateNavigator.vue";
import BoxTiki from "@/views/ToanNT16/profile/BoxTiki.vue";
import JobContainer from "@/views/ToanNT16/profile/JobContainer.vue";

export default {
  name: "JobDetails",
  components: {
    Header,
    SearchHeader,
    CandidateNavigator,
    BoxTiki,
    JobContainer,
  },
};
</script>

<style>
</style>