<template>
  <div>
    <HeaderComponent />
    <SearchHeader />
    <CandidateHeader />
    <CandidateSummary />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import CandidateHeader from "@/views/ToanNT16/candidate/profile/CandidateHeader.vue";
import CandidateSummary from "@/views/ToanNT16/candidate/profile/candidate_summary/CandidateSummary.vue";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "CandidateProfile",
  components: {
    HeaderComponent,
    SearchHeader,
    CandidateHeader,
    CandidateSummary,
  },
  async created() {
    const candidateId = this.$route.params.candidateId;
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