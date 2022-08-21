<template>
  <div class="container-fluid information-recruitment-container mb-5">
    <div class="py-3">
      <div class="row">
        <div class="col-2">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="@/assets/cc1.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">
              Đã ứng tuyển: {{ getSuitablePosting.numberOfAppliedJob }}
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="@/assets/cc2.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">
              Việc làm phù hợp: {{ getSuitablePosting.numberOfSuitableJob }}
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="@/assets/cc3.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">Mẫu CV đã tạo</div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <div class="row">
            <div class="col-12">
              <img class="img-fluid" src="@/assets/cc4.png" alt="" />
            </div>
            <div class="col-12 text-left h5 mt-3">
              NTD xem hồ sơ: {{ getSuitablePosting.view }}
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
  name: "InformationRecruitment",
  computed: {
    ...mapGetters(["getSuitablePosting", "isGetSuitablePostingFunction"]),
  },
};
</script>

<style scoped>
img{
  width: 150px;
}

.information-recruitment-container {
  background: #ffffff;
  box-shadow: 4px 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1.3rem;
}
</style>