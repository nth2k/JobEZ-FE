<template>
  <div class="container-fluid information-recruitment-container mb-5">
    <div class="py-3">
      <div class="row">
        <div class="col-2">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="../../../assets/cc1.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đã ứng tuyển:
              {{ numberOfApplied }}&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="../../../assets/cc2.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">
              &nbsp;&nbsp;Việc làm phù hợp: {{ suitableJobs }}
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="../../../assets/cc3.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mẫu CV
              đã tạo
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="../../../assets/cc4.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NTD xem hồ sơ: {{ seen }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationRecruitment",
  data() {
    return {
      numberOfApplied: 0,
      suitableJobs: 12721,
      seen: 15,
    };
  },
};
</script>

<style scoped>
.information-recruitment-container {
  background: #ffffff;
  box-shadow: 4px 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1.3rem;
}
</style>