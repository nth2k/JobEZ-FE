<template>
  <!-- <CandidateProfile /> -->
  <!-- <JobDetails /> -->
  <!-- <RecruiterProfile /> -->
  <!-- <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <SavedJob />
    </div>
  </div> -->
  <!-- <AppliedJob /> -->
  <!-- <Header /> -->
  <!-- <SavedJob /> -->
  <change-password />
</template>

<script>
import ChangePassword from './views/ChangePassword.vue';
// import CandidateProfile from "./components/views/candidate_views/CandidateProfile.vue";
// import JobDetails from "./components/views/recruiter_views/JobDetails.vue";
// import Header from "./components/views/Header.vue";
// import RecruiterProfile from "./components/views/RecruiterProfile.vue";
// import ProfileHeader from "./components/views/candidate_views/candidate_management/candidate_management_profile/ProfileHeader.vue";
// import Header from "./views/ToanNT16/candidate_management/Header.vue";
// import SlideBar_candidate from "./components/ProfileCandidate/slideBar_candidate.vue";
// import SavedJob from "./views/SavedJob.vue";
// import AppliedJob from "./views/AppliedJob.vue";

export default {
  name: "App",
  components: { 
      // SavedJob
      // AppliedJob 
      ChangePassword
      // Header
    },
};
</script>

<style>
</style>