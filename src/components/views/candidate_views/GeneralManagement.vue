<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 p-0">
        <CandidateManagementNavigatorVue />
      </div>
      <div class="col-9"></div>
    </div>
  </div>
</template>

<script>
import CandidateManagementNavigatorVue from "./candidate_management/CandidateManagementNavigator.vue";
export default {
  name: "GeneralManagement",
  components: {
    CandidateManagementNavigatorVue,
  },
};
</script>

<style>
</style>