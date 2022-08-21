<template>
  <div v-if="isGetAPI" class="content_detail">
    <div class="uv_tab mw-100 mb-3">
      <span class="tablinks">Thông tin</span>
    </div>
    <div class="s-from ct_tab active">
      <div class="tt_td">
        <div class="box_tomtat_2">
          <p>
            - Chức vụ: <span>{{ getJob.position }}</span>
          </p>
          <p>
            - Kinh nghiệm: <span>{{ getJob.yearOfExperience }}</span>
          </p>
          <p>
            - Hình thức làm việc: <span>{{ getJob.workingForm }}</span>
          </p>
          <p>
            - Yêu cầu bằng cấp: <span>{{ getJob.degreeRequired }}</span>
          </p>
          <p>
            - Yêu cầu giới tính: <span>{{ getJob.genderRequirement }}</span>
          </p>
          <p>
            - Số lượng cần tuyển: <span>{{ getJob.quantity }}</span>
          </p>
        </div>
        <div class="box_mota">
          <div class="hd_mota">
            <h2 class="descibe">Mô tả công việc</h2>
            <ul>
              <li v-for="(item, index) in descriptionFormat" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div class="box_yeucau">
          <h2 class="descibe">Yêu cầu công việc</h2>
          <ul>
            <li v-for="(item, index) in jobRequiredFormat" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="box_quyenloi">
          <h2 class="descibe">Quyền lợi được hưởng</h2>
          <ul>
            <li v-for="(item, index) in benefitsFormat" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="box_hoso">
          <h2 class="descibe">Hồ sơ bao gồm</h2>
          <ul>
            <li v-for="(item, index) in profileIncludedFormat" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="box_quyenloi">
        <h2 class="descibe">Hình ảnh</h2>
      </div>
      <div class="span_ut">
        <div class="col-3 col-sm-6"></div>
        <div class="col-3 col-sm-6"></div>
        <div class="col-3 col-sm-6"></div>
        <span
          @click="applyPosting"
          style="margin-right: 20px"
          class="btn_ungtuyen"
          data-id="0"
          data-alert="Vui lòng đăng nhập tài khoản Ứng Viên để ứng tuyển!"
          data-nc="0"
          >Nộp hồ sơ</span
        >
        <span
          @click="savePosting"
          class="save_job"
          data-id="812841"
          data-use="0"
          data-uid=""
          >Lưu công việc</span
        >
      </div>
    </div>
    <div class="tag_vl">
      <p class="dm_gyy descibe">Địa điểm:</p>
      <div class="container">
        <div class="row">
          <div
            v-for="(item, index) in getJob.citiesDto"
            :key="index"
            class="col-3"
            style="padding: 0"
          >
            <router-link
              tag="a"
              :to="{
                name: 'JobCategory',
                params: { provinceId: item.id },
              }"
              >Việc làm {{ item.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import JobDetailService from "@/services/JobDetailService";
export default {
  name: "JobDescription",
  computed: {
    ...mapGetters(["getJob", "isGetAPI"]),
    descriptionFormat: function () {
      return JobDetailService.descriptionFormat(this.getJob.description);
    },
    jobRequiredFormat: function () {
      return JobDetailService.jobRequiredFormat(this.getJob.jobRequirement);
    },
    benefitsFormat: function () {
      return JobDetailService.benefitsFormat(this.getJob.benefits);
    },
    profileIncludedFormat: function () {
      return JobDetailService.filesFormat(this.getJob.profileIncluded);
    },
  },
  methods: {
    ...mapActions(["getAppliedJob", "getSavedJob"]),
    applyPosting: function () {
      const token = window.localStorage.getItem("user");
      if (!token) {
        this.$store.dispatch("setSnackbar", {
          color: "error",
          text: "Bạn cần đăng nhập trước",
        });
        return;
      }
      const data = JSON.parse(token);
      const candidateEmail = data.user.email;
      const postingId = this.getJob.id;
      const recruiterEmail = this.getJob.recruiterEmail;

      if (token == null) {
        this.$router.push("/candidateLogin");
      } else {
        this.getAppliedJob({ candidateEmail, recruiterEmail, postingId });
      }
      this.$store.dispatch("setSnackbar", {
        text: "Nộp Hồ Sơ Thành Công",
      });
    },
    savePosting: function () {
      const token = window.localStorage.getItem("user");
      if (!token) {
        this.$store.dispatch("setSnackbar", {
          color: "error",
          text: "Bạn cần đăng nhập trước",
        });
        return;
      }
      const data = JSON.parse(token);
      const email = data.user.email;
      const postingId = this.getJob.id;
      if (token == null) {
        this.$router.push("/candidateLogin");
      } else {
        this.getSavedJob({ email, postingId });
      }
      this.$store.dispatch("setSnackbar", {
        text: "Lưu Công Việc Thành Công",
      });
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto";
  font-style: normal;
}
.tablinks {
  background: #182543;
  color: #ffffff;
  display: block;
  padding-top: 0.6rem;
  padding-left: 2rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.highlight {
  background: rgba(76, 91, 212, 0.1);
  border: 1px solid rgba(76, 91, 212, 0.5);
  border-radius: 5px;
  margin-right: 0.5rem;
  padding: 0.3rem;
}

.box_tomtat_2,
.box_mota,
.box_yeucau,
.box_quyenloi,
.box_hoso,
.span_ut {
  border-bottom: 0.5px solid #c4c4c4;
}

.descibe {
  font-weight: bold;
  font-size: 1.2rem;
}

.span_ut {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1.1rem;
}

.btn_ungtuyen {
  background: #4c5bd4;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
}

a.btn_ssl:hover {
  text-decoration: none;
}

.save_job,
.bcuv,
.btn_ssl {
  border: 1px solid #4c5bd4;
  color: #4c5bd4;
  background-color: #ffffff;
  border-radius: 0.3rem;
  cursor: pointer;
}

.btn_ungtuyen,
.save_job,
.bcuv,
.btn_ssl {
  font-weight: bold;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
}

.dm_gy_list span {
  margin: 0 0.1rem;
}

.dm_gy_list a,
.dm_gy_list span,
dm_gyy a {
  color: #eb5757;
}
</style>