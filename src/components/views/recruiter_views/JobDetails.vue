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
import Header from "../../views/Header.vue";
import SearchHeader from "../SearchHeader.vue";
import CandidateNavigator from "../candidate_views/CandidateNavigator.vue";
import BoxTiki from "../candidate_views/BoxTiki.vue";
import JobContainer from "../candidate_views/job_details/JobContainer.vue";

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