<template>
  <div>
    <div class="container pt-5 summary-container">
      <div class="row">
        <div class="col-12 col-xl-8">
          <RecruiterDescription />
        </div>
        <div class="col-12 col-xl-4">
          <RecruiterAddress />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecruiterAddress from "./recruiter_summary/RecruiterAddress.vue";
import RecruiterDescription from "./recruiter_summary/RecruiterDescription.vue";

export default {
  name: "RecruiterSummary",
  components: {
    RecruiterAddress,
    RecruiterDescription,
  },
};
</script>

<style scoped>
.summary-container {
  border-bottom: 0.5px solid gray;
}
</style>