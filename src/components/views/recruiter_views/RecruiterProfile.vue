<template>
  <div>
    <Header />
    <SearchHeader />
    <RecruiterNavigator />
    <RecruitorHeader />
    <RecruiterSummary />
    <RecruiterPostings />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchHeader from "./../candidate_views/SearchHeader.vue";
import RecruiterNavigator from "./RecruiterNavigator.vue";
import RecruitorHeader from "./RecruitorHeader.vue";
import RecruiterSummary from "./RecruiterSummary.vue";
import RecruiterPostings from "./posting_views/RecruiterPostings.vue";

export default {
  name: "RecruiteProfile",
  components: {
    Header,
    SearchHeader,
    RecruiterNavigator,
    RecruitorHeader,
    RecruiterSummary,
    RecruiterPostings,
  },
};
</script>

<style>
</style>