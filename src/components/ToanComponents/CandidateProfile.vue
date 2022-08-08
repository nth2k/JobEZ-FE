<template>
  <div>
    <HeaderLogin />
    <SearchHeader />
    <CandidateHeader />
    <CandidateSummary />
  </div>
</template>

<script>
import HeaderLogin from "@/views/ToanNT16/profile/Header_Login.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import CandidateHeader from "@/views/ToanNT16/candidate/profile/CandidateHeader.vue";
import CandidateSummary from "@/views/ToanNT16/candidate/profile/candidate_summary/CandidateSummary.vue";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "CandidateProfile",
  components: {
    HeaderLogin,
    SearchHeader,
    CandidateHeader,
    CandidateSummary,
  },
  async created() {
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