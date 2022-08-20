<template>
  <div>
    <HeaderComponent />
    <SearchHeader />
    <JobCategoryNavigator />
    <JobCategoryContent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import JobCategoryNavigator from "@/views/ToanNT16/job_category/JobCategoryNavigator.vue";
import JobCategoryContent from "@/views/ToanNT16/job_category/JobCategoryContent.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "JobCategory",
  components: {
    HeaderComponent,
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