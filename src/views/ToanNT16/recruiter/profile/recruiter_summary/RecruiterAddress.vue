<template>
  <div v-if="isGetRecruiterFunction" class="address-container">
    <div class="address-header">
      <h3 class="address-title">Chi Tiết Nhà Tuyển Dụng</h3>
    </div>
    <div class="address-body">
      <p></p>
      <div class="icon-address">
        <img class="mr-2" src="@/assets/dt_1.png" alt="địa chỉ" /><span
          ><strong
            >Địa chỉ: {{ getRecruiter.street }}, {{ getRecruiter.province }},
            {{ getRecruiter.city }}</strong
          >
        </span>
      </div>

      <p></p>
      <p></p>
      <div class="icon-scale">
        <img class="mr-2" src="@/assets/dt_2.png" alt="quy mô công ty" /><span
          ><strong>Quy mô:</strong> Từ 100 - 499 nhân viên</span
        >
      </div>

      <p></p>
      <p></p>
      <div class="icon-website">
        <img
          class="mr-2"
          src="@/assets/icon_web2.png"
          alt="website công ty"
        /><span><strong>Website:</strong> nutramed.us</span>
      </div>

      <p></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecruiterAddress",
  computed: {
    ...mapGetters(["getRecruiter", "isGetRecruiterFunction"]),
  },
};
</script>

<style scoped>
.address-container {
  border: 1px solid #e1e1e1;
  border-radius: 0px 0px 5px 5px;
}

.address-title {
  background: #4c5bd4;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.address-body,
.address-title {
  padding-left: 1rem;
}
</style>