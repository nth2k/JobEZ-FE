<template>
  <div class="container">
    <div class="row">
      <div class="col-9"><FormCurriculumVitae /></div>
      <div class="col-3"><RelatedCurriculumVitae /></div>
      >
    </div>
  </div>
</template>

<script>
import FormCurriculumVitae from "./curriculum_vitae_01/FormCurriculumVitae.vue";
import RelatedCurriculumVitae from "./curriculum_vitae_01/RelatedCurriculumVitae.vue";

export default {
  name: "CurriculumVitae_01",
  components: {
    FormCurriculumVitae,
    RelatedCurriculumVitae,
  },
};
</script>

<style scoped>
</style>