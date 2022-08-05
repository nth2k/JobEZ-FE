<template>
  <div>
    <HeaderLogin />
    <SearchHeader />
    <JobCategoryNavigator />
    <JobCategoryContent />
  </div>
</template>

<script>
import HeaderLogin from "@/views/ToanNT16/profile/Header_Login.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import JobCategoryNavigator from "@/views/ToanNT16/job_category/JobCategoryNavigator.vue";
import JobCategoryContent from "@/views/ToanNT16/job_category/JobCategoryContent.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "JobCategory",
  components: {
    HeaderLogin,
    SearchHeader,
    JobCategoryNavigator,
    JobCategoryContent,
  },
  computed: {
    ...mapGetters(["getJob"]),
    ...mapState(["job"]),
  },
};
</script>

<style>
</style>