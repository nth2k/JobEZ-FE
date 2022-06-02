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
import SearchHeader from "./SearchHeader.vue";
import RecruiterNavigator from "./recruiter_views/RecruiterNavigator.vue";
import RecruitorHeader from "./recruiter_views/RecruitorHeader.vue";
import RecruiterSummary from "./recruiter_views/RecruiterSummary.vue";
import RecruiterPostings from "./recruiter_views/posting_views/RecruiterPostings.vue";

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