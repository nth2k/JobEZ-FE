<template>
  <div class="container-fluid navigator-bar">
    <div class="row navigator-content">
      <div class="col-2 p-0">
        <CandidateManagementNavigatorVue />
      </div>
      <div class="col-10"></div>
    </div>
  </div>
</template>

<script>
import CandidateManagementNavigatorVue from "../../../views/ToanNT16/candidate_management/Navigator.vue";
export default {
  name: "GeneralManagement",
  components: {
    CandidateManagementNavigatorVue,
  },
};
</script>

<style scoped>
.navigator-bar {
  height: 100vh;
  overflow: auto;
}

.navigator-content {
  height: 100vh;
  overflow: auto;
}
</style>