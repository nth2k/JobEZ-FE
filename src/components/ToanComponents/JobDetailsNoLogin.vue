<template>
  <div>
    <HeaderLogin />
    <SearchHeader />
    <CandidateNavigator />
    <BoxTiki />
    <JobContainer />
  </div>
</template>

<script>
import HeaderLogin from "@/views/ToanNT16/profile/Header_Login.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import CandidateNavigator from "@/views/ToanNT16/profile/CandidateNavigator.vue";
import BoxTiki from "@/views/ToanNT16/profile/BoxTiki.vue";
import JobContainer from "@/views/ToanNT16/profile/JobContainer.vue";

import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "JobDetailsNoLogin",
  methods: {
    ...mapActions(["getJobById"]),
  },
  computed: {
    ...mapGetters(["getJob"]),
    ...mapState(["job"]),
  },
  async created() {
    const postingId = this.$route.params.postingId;
    const userId = 1;
    await this.getJobById({ userId, postingId });
  },
  components: {
    HeaderLogin,
    SearchHeader,
    CandidateNavigator,
    BoxTiki,
    JobContainer,
  },
};
</script>

<style>
</style>