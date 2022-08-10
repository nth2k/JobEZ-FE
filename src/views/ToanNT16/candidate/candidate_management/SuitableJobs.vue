<template>
  <div class="container-fluid pt-1" id="suitable-jobs">
    <header><strong>// Việc Làm Phù Hợp</strong></header>
    <div class="row px-5 py-3">
      <div
        v-for="(job, index) in getSuitablePosting.suitableJob"
        :key="index"
        class="col-12 col-sm-6 border mr-2 row mb-4"
      >
        <div class="col-2">
          <img
            class="img-fluid mx-0"
            :src="job.images"
            :alt="job.companyName"
          />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-12">{{ job.position }}</div>
            <div class="col-12">{{ job.companyName }}</div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">{{ job.province }}</div>
              <div class="col-4 text-danger">{{ job.salary }}</div>
              <div class="col-4">{{ job.deadLineForSubmission }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SuitableJobs",
  computed: {
    ...mapGetters(["getSuitablePosting", "isGetSuitablePostingFunction"]),
  },
};
</script>

<style scoped>
* {
  box-sizing: border;
}

#suitable-jobs {
  border-radius: 1rem;
  box-shadow: 4px 1px 20px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}
</style>