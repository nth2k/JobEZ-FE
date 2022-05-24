<template>
  <div id="app">
    <Header />
    <SearchHeader />
    <Navigator />
    <JobContainer />
  </div>
</template>

<script>
import Header from "./components/views/recruiter_views/Header.vue";
import SearchHeader from "./components/views/candidate_views/SearchHeader.vue";
import Navigator from "./components/views/candidate_views/Navigator.vue";
import JobContainer from "./components/views/candidate_views/job_details/JobContainer.vue";

export default {
  name: "App",
  components: {
    Header,
    SearchHeader,
    Navigator,
    JobContainer,
  },
};
</script>

<style>
</style>