<template>
  <!-- <CandidateProfile /> -->
  <!-- <JobDetails /> -->
  <!-- <RecruiterProfile /> -->
  <CandidateManagementProfileHeader />
</template>

<script>
// import CandidateProfile from "./components/views/candidate_views/CandidateProfile.vue";
// import JobDetails from "./components/views/recruiter_views/JobDetails.vue";
// import Header from "./components/views/Header.vue";
// import RecruiterProfile from "./components/views/RecruiterProfile.vue";
import CandidateManagementProfileHeader from "./components/views/candidate_views/candidate_management/candidate_management_profile/CandidateManagementProfileHeader.vue";

export default {
  name: "App",
  components: { CandidateManagementProfileHeader },
};
</script>

<style>
</style>