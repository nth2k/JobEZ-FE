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

export default {
  name: "JobDetails",
  mounted() {
    this.id = this.$route.params.id;
  },
  data() {
    return { id: null };
  },
  components: {
    HeaderLogin,
    SearchHeader,
    CandidateNavigator,
    BoxTiki,
    JobContainer,
  },
  created() {
    console.log(this.$store.params.id);
  },
};
</script>

<style>
</style>