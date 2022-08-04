<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-8"><JobDescription /></div>
      <div class="col-4"><RelatedJob /></div>
    </div>
  </div>
</template>

<script>
import JobDescription from "@/components/views/candidate_views/job_details/JobDescription.vue";
import RelatedJob from "@/components/views/candidate_views/job_details/RelatedJob.vue";

export default {
  name: "JobContainer",
  components: {
    JobDescription,
    RelatedJob,
  },
};
</script>

<style>
</style>