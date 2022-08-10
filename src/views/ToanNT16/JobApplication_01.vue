<template>
  <div class="container">
    <div class="row">
      <div class="col-9"><FormLetter /></div>
      <div class="col-3"><RelatedFormLetter /></div>
    </div>
  </div>
</template>

<script>
import FormLetter from "@/views/ToanNT16/candidate/job_application/FormLetter.vue";
import RelatedFormLetter from "@/views/ToanNT16/candidate/job_application/RelatedFormLetter.vue";

export default {
  name: "JobApplication_01",
  components: {
    FormLetter,
    RelatedFormLetter,
  },
};
</script>

<style scoped>
</style>