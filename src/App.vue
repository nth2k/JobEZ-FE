<template>
  <div id="app">
    <CandidateProfile />
    <!--<CandidateNavigator />
    <BoxTiki />
    <JobContainer /> 
    <CandidateSummary />-->
  </div>
</template>

<script>
// import RecruiterProfile from "./components/views/recruiter_views/RecruiterProfile.vue";
import CandidateProfile from "./components/views/candidate_views/CandidateProfile.vue";
// import JobContainer from "./components/views/candidate_views/job_details/JobContainer.vue";
// import RecruiterProfile from "./components/views/recruiter_views/RecruiterProfile.vue";
// import CandidateSummary from "./components/views/candidate_views/candidate_summary/CandidateSummary.vue";

export default {
  name: "App",
  components: {
    // JobContainer,
    CandidateProfile,
    // BoxTiki,
    // CandidateNavigator,
    // RecruiterProfile,
    // CandidateSummary,
  },
};
</script>

<style>
</style>