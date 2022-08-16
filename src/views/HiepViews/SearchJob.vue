<template>
  <div>
    <HeaderComponent />
    <div class="search-container">
      <div class="search-form">
        <input
          v-model="searchText"
          type="text"
          placeholder="Nhập công việc, vị trí, ..."
        />
        <select name="province" id="">
          <option value="">---Chọn tỉnh thành---</option>
        </select>
        <button @click="submit">Tìm kiếm</button>
      </div>
      <div class="text-center mt-5 mb-5">
        <span style="color: white">Cần thêm nhiều tùy chọn tìm kiếm? </span>
        <span style="color: yellow">Tìm kiếm nâng cao</span>
      </div>
    </div>
    <h4 class="text-center mt-5" style="color: #4c5bd4">
      Việc Làm Tuyển Dụng Mới Nhất
    </h4>
    <div class="search-result">
      <h5>Việc tìm người mới nhất - cập nhật liên tục</h5>
      <hr />
      <div class="job-container1">
        <div
          v-for="(job, index) in listSearchJob"
          :key="index"
          class="job row p-3 m-3"
        >
          <div class="logo">
            <img style="width: 170px; height: 100px" :src="job.images" alt="" />
          </div>
          <div class="job-info pl-4">
            <span
              style="color: red; cursor: pointer"
              @click="jobProfile(job.id)"
              >{{ job.jobName }}</span
            ><br />
            <span>Vị trí: {{ job.position }}</span
            ><br />
            <img src="@/assets/icn_location.png" alt="" />
            <span> Bằng cấp: {{ job.degreeRequired }}</span
            ><br />
            <img src="@/assets/hn_icon.png" alt="" /><span>
              Hạn nộp: {{ job.deadlineForSubmission }}</span
            >
            <img
              style="margin-left: 70px"
              src="@/assets/dt_6.png"
              alt=""
            /><span style="color: green"> Lượt xem: {{ job.view }}</span
            ><br />
            <span
              v-if="isClicked == false"
              v-on:click="isClicked = !isClicked"
              style="color: green"
            >
              - Xem thêm</span
            >
            <span
              v-if="isClicked"
              v-on:click="isClicked = !isClicked"
              style="color: red"
            >
              - Rút gọn</span
            ><br />
          </div>
          <div v-if="isClicked" class="shortDes p-3">
            <h5>Mô tả công việc</h5>
            <p>
              {{ job.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="page">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li
            v-for="i in totalPage"
            :key="i"
            class="page-item"
            @click="paging(i)"
          >
            <a class="page-link"> {{ i }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import SearchJobService from "@/services/SearchJobService.js";
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
export default {
  name: "SearchJob",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      isClicked: false,
      searchText: this.$route.params.searchText,
      pageOffset: 0,
      listSearchJob: [],
      totalPage: 0,
      selectedPage: 1,
    };
  },
  methods: {
    jobProfile(jobId) {
      this.$router.push({
        name: "JobDetailsNoLogin",
        params: { postingId: jobId },
      });
    },
    paging(selectedPage) {
      SearchJobService.getJobByTextField(this.searchText, selectedPage).then(
        (rs) => {
          this.listSearchJob = rs.data.content;
        }
      );
    },
    submit() {
      this.$router.push({
        name: "SearchJob",
        params: { searchText: this.searchText },
      });
      SearchJobService.getJobByTextField(this.searchText, this.pageOffset).then(
        (rs) => {
          this.listSearchJob = rs.data.content;
          if (rs.data.total % 4 == 0) {
            this.totalPage = rs.data.total % 4;
          } else if (rs.data.total % 4 != 0) {
            this.totalPage = (rs.data.total % 4) + 1;
          } else if (rs.data.total % 4 < 1) {
            this.totalPage = 1;
          }
        }
      );
    },
  },
  created() {
    SearchJobService.getJobByTextField(this.searchText, this.pageOffset).then(
      (rs) => {
        this.listSearchJob = rs.data.content;
        if (rs.data.total % 4 == 0) {
          this.totalPage = rs.data.total % 4;
        } else if (rs.data.total % 4 != 0) {
          this.totalPage = (rs.data.total % 4) + 1;
        } else if (rs.data.total % 4 < 1) {
          this.totalPage = 1;
        }
      }
    );
  },
};
</script>

<style scoped>
.search-container {
  background-image: url("@/assets/landingPage.png");
  width: 100%;
  height: 286px;
  padding-top: 70px;
}

.search-form {
  width: 80%;
  text-align: center;
  margin: 0 auto;
}

.search-form input {
  width: 600px;
  height: 65px;
  border-radius: 50px 2px 2px 50px;
  padding-left: 40px;
  background-color: white;
  border: 2px solid black;
}

.search-form select {
  width: 356px;
  height: 65px;
  padding-left: 40px;
  background-color: white;
  border: 2px solid black;
}

.search-form button {
  width: 120px;
  height: 62px;
  background-color: #fff600;
  border-radius: 2px 50px 50px 2px;
}

.search-result {
  width: 90%;
  height: auto;
  margin: 50px auto;
}

.job-container1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.job {
  width: 47%;
  height: auto;
  margin: 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

.job-info {
  height: auto;
}

.shortDes {
  margin-top: 13px;
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
}

.page {
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;
}
</style>