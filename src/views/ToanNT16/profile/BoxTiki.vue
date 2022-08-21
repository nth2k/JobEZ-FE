<template>
  <div v-if="isGetAPI" class="container-fluid">
    <div class="container pt-4">
      <div class="box_titi">
        <div class="container_timviec">
          <div class="box_tit_detail row">
            <div class="left_tit col-2 d-flex flex-column">
              <div class="img_detail mb-3">
                <img
                  class="lazyloaded img-fluid"
                  :src="getJob.images"
                  :data-src="getJob.companyName"
                  :alt="getJob.companyName"
                />
              </div>
              <router-link
                class="ct_com text-white text-center p-2"
                tag="a"
                :to="{
                  name: 'RecruiterProfile',
                  params: { recruiterId: getJob.companyId },
                }"
                >Chi tiết công ty</router-link
              >
            </div>
            <div class="right_tit col-7 pl-4">
              <h1 class="font-weight-bold">
                {{ formatTitle }}
              </h1>

              <router-link
                class="na_cty text-dark mb-2"
                tag="a"
                :to="{
                  name: 'RecruiterProfile',
                  params: { recruiterId: getJob.companyId },
                }"
                >{{ getJob.companyName }}</router-link
              >

              <p class="mt-1 mb-1">
                Lượt xem: {{ getJob.view }}. |
                <span class="date_update">Ngày cập nhật: {{ currentDate }} </span>
              </p>
              <p class="dd_tuyen">
                Tỉnh thành tuyển dụng:
                <router-link
                  class="p-1"
                  tag="a"
                  :to="{
                    name: 'JobCategory',
                    params: { provinceId: getJob.province[0].id },
                  }"
                  >{{ formatProvince }}</router-link
                >
              </p>
              <p class="dd_tuyen">
                Quận huyện tuyển dụng:
                <router-link
                  class="p-1"
                  tag="a"
                  :to="{
                    name: 'JobCategory',
                    params: { cityId: getJob.cities[0].id },
                  }"
                  >{{ formatCity }}</router-link
                >
              </p>
              <p class="mb-2">
                Địa điểm tuyển dụng:
                <span> {{ formatStreet }}</span>
              </p>
              <p></p>
              <p>
                Hạn nộp hồ sơ: <span> {{ getJob.deadlineForSubmission }} </span>
              </p>
            </div>
            <div
              class="right_tit_2 col-3 d-flex justify-content-center align-items-center pl-5"
            >
              <div class="d-flex flex-column justify-content-center align-items-center">
                <p class="dd_tuyen">
                  Mức lương:
                  <span style="color: #ff4d43">{{ getJob.salary }}</span>
                </p>
                <div>
                  <p
                    class="chat_call btn_login_do"
                    data-type="0"
                    data-id="211635"
                    chat-id="1"
                    title="Đang offline"
                  >
                    Chat ngay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import JobDetailService from "@/services/JobDetailService";
export default {
  name: "BoxTiki",
  data() {
    return {
      currentDate: moment().format("DD/MM/YYYY"),
    };
  },
  computed: {
    ...mapGetters(["getJob", "isGetAPI"]),
    formatTitle: function () {
      return JobDetailService.titleCase(this.getJob.jobName);
    },
    formatProvince: function () {
      return JobDetailService.formatProvince(this.getJob.province);
    },
    formatCity: function () {
      return JobDetailService.formatCity(this.getJob.cities);
    },
    formatStreet: function () {
      return JobDetailService.formatStreet(this.getJob.street);
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1.1rem;
  font-family: Roboto-Regular, sans-serif !important;
  font-style: normal;
}

div.container-fluid {
  box-shadow: 0px 0px 9px rgba(51, 51, 51, 0.25);
}

.ct_com {
  background-color: #4c5bd4;
  border-radius: 0.5rem;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.right_tit h1 {
  font-size: 1.8rem;
}
a.p-1 {
  background-color: rgba(76, 91, 212, 0.1);
  border: 1px solid rgba(76, 91, 212, 0.5);
  border-radius: 0.4rem;
}

.right_tit_2 {
  font-weight: bold;
}

.chat_call {
  border: 1px solid #6f6f6f;
  border-radius: 0.3rem;
  padding: 0.8rem 4rem;
  color: #6f6f6f;
  margin-right: 0;
}
</style>
