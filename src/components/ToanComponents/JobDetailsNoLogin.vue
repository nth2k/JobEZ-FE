<template>
  <div>
    <HeaderComponent />
    <SearchHeader />
    <CandidateNavigator />
    <BoxTiki />
    <JobContainer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
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
    // const token = JSON.parse(window.localStorage.getItem("user"));
    // const userId = token.user.id;
    await this.getJobById({ postingId });
  },
  components: {
    HeaderComponent,
    SearchHeader,
    CandidateNavigator,
    BoxTiki,
    JobContainer,
  },
};
</script>

<style>
</style>