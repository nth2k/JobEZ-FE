<template>
  <div>
    <Header />
    <SearchHeader />
    <CandidateHeader />
    <CandidateSummary />
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/profile/Header.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import CandidateHeader from "@/views/ToanNT16/candidate/profile/CandidateHeader.vue";
import CandidateSummary from "@/views/ToanNT16/candidate/profile/candidate_summary/CandidateSummary.vue";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "CandidateProfile",
  components: {
    Header,
    SearchHeader,
    CandidateHeader,
    CandidateSummary,
  },
  async created() {
    // const candidateId = this.$route.params.candidateId;
    const candidateId = 4;
    this.getCandiateById({ candidateId });
  },
  methods: {
    ...mapActions(["getCandiateById"]),
  },
  computed: {
    ...mapGetters(["isGetCandidateFunction"]),
  },
};
</script>

<style>
</style>