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

import { mapGetters, mapActions } from "vuex";

export default {
  name: "JobDetailsNoLogin",
  setup() {},
  data() {
    return { id: null };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.$store.dispatch("getJobById", this.id);
  },
  methods: {
    ...mapActions(["getJobById", "setJobId"]),
  },
  components: {
    HeaderLogin,
    SearchHeader,
    CandidateNavigator,
    BoxTiki,
    JobContainer,
  },
  computed: {
    ...mapGetters(["getJob"]),
  },
};
</script>

<style>
</style>