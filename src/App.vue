<template>
  <div>
    <div class="container-fluid"></div>
    <Header />
    <!-- <Banner /> -->
    <SearchHeader />
    <Navigator />
    <BoxTiki />
    <JobContainer />
  </div>
</template>

<script>
import Header from "./components/views/candidate_views/Header.vue";
// import Banner from "./components/views/candidate_views/Banner.vue";
import SearchHeader from "./components/views/candidate_views/SearchHeader.vue";
import Navigator from "./components/views/candidate_views/Navigator.vue";
import BoxTiki from "./components/views/candidate_views/BoxTiki.vue";
import JobContainer from "./components/views/candidate_views/job_details/JobContainer.vue";

export default {
  name: "App",
  components: {
    Header,
    // Banner,
    SearchHeader,
    Navigator,
    BoxTiki,
    JobContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
