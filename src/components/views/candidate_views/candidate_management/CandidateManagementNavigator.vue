<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 w-100 h-25 header">Width 25%</div>
      <div class="col-12 h-25">Width 25%</div>
      <div class="body col-12 h-25">Width 25%</div>
      <div class="footer col-12 h-25">Width 25%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidateManagementNavigator",
  components: {},
};
</script>

<style scoped>
* {
  width: 100%;
}

.header {
  background-color: #4c5bd4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>