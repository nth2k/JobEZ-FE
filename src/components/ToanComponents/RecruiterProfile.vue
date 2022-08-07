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
import Header from "@/views/ToanNT16/profile/Header.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import RecruiterNavigator from "@/views/ToanNT16/recruiter/profile/RecruiterNavigator.vue";
import RecruitorHeader from "@/views/ToanNT16/recruiter/RecruitorHeader.vue";
import RecruiterSummary from "@/views/ToanNT16/recruiter/profile/RecruiterSummary.vue";
import RecruiterPostings from "@/views/ToanNT16/recruiter/profile/posting_views/RecruiterPostings.vue";

import { mapActions, mapGetters } from "vuex";

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
  async created() {
    const recruiterId = this.$route.params.recruiterId;
    await this.getRecruiterById(recruiterId);
  },
  methods: {
    ...mapActions(["getRecruiterById"]),
  },
  computed: {
    ...mapGetters(["getRecruiter", "isGetRecruiterFunction"]),
  },
};
</script>

<style>
</style>