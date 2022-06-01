<template>
  <div class="navigator">
    <div class="row m-0">
      <div class="col-12 custom-padding"></div>
      <div class="col-12 header">
        <div class="mt-4 mb-4">Hoàn thiện hồ sơ :</div>
        <div class="progress mb-4">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            25%
          </div>
        </div>
        <div class="mb-5"><button class=" refresh-profile">Làm mới hồ sơ</button></div>
      </div>
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
.navigator {
  background: #232f87;
  color: #ffffff;
  font-family: "Roboto";
}

.custom-padding {
  background-color: #4c5bd4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 3rem;
}

.header {
  border-bottom: 1px solid #ffffff;
}

.refresh-profile {
  background: #4c5bd4;
  border-radius: 1.2rem;
  padding: 0.5rem 2rem;
}
</style>