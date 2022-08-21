<template>
  <v-app>
    <div>
      <HeaderComponent />
      <div class="search-container">
        <h1 class="text-center" style="color: white; padding-top: 150px">
          JobEZ
        </h1>
        <div class="search-form">
          <input
            v-model="searchText"
            type="text"
            placeholder="Nhập công việc, vị trí, ..."
          />
          <select v-model="selectedProvince">
            <option value="" disabled hidden>Chọn tỉnh thành</option>
            <option
              v-for="(item, index) in listProvince"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
          <button @click="submit">Tìm kiếm</button>
        </div>
        <div class="row advance">
          <div class="col-4 text-center">
            <img src="@/assets/HomePage1.png" alt="" /><br />
            Đăng tin miễn phí
          </div>
          <div class="col-4 text-center">
            <img src="@/assets/HomePage2.png" alt="" /><br />
            <div class="search_nc mb-3 mt-5">
              <div
                class="modal fade bd-example-modal-lg"
                id="advanceSearch"
                role="dialog"
              >
                <div
                  class="modal-dialog modal-dialog-centered modal-lg"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title"
                        id="exampleModalLongTitle"
                        style="color: black"
                      >
                        Tìm Kiếm Nâng Cao
                      </h5>
                    </div>
                    <div class="modal-body container-fluid">
                      <div class="search-content">
                        <div class="row">
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option>Chọn tỉnh thành</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="0">Không yêu cầu</option>
                                <option value="7">Đại học trở lên</option>
                                <option value="5">Cao đẳng trở lên</option>
                                <option value="1">THPT trở lên</option>
                                <option value="2">Trung học trở lên</option>
                                <option value="3">Chứng chỉ</option>
                                <option value="4">Trung cấp trở lên</option>
                                <option value="6">Cử nhân trở lên</option>
                                <option value="8">Thạc sĩ trở lên</option>
                                <option value="9">Thạc sĩ Nghệ thuật</option>
                                <option value="10">Thạc sĩ Thương mại</option>
                                <option value="11">Thạc sĩ Khoa học</option>
                                <option value="12">Thạc sĩ Kiến trúc</option>
                                <option value="13">Thạc sĩ QTKD</option>
                                <option value="14">
                                  Thạc sĩ Kỹ thuật ứng dụng
                                </option>
                                <option value="15">Thạc sĩ Luật</option>
                                <option value="16">Thạc sĩ Y học</option>
                                <option value="17">Thạc sĩ Dược phẩm</option>
                                <option value="18">Tiến sĩ</option>
                                <option value="19">Khác</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option>Chọn quận huyện</option>
                                <option>2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="0">Chọn giới tính</option>
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="0">Chọn mức lương</option>
                                <option value="1">Thỏa thuận</option>
                                <option value="2">1 - 3 triệu</option>
                                <option value="3">3 - 5 triệu</option>
                                <option value="4">5 - 7 triệu</option>
                                <option value="5">7 - 10 triệu</option>
                                <option value="6">10 - 15 triệu</option>
                                <option value="7">15 - 20 triệu</option>
                                <option value="8">20 - 30 triệu</option>
                                <option value="9">Trên 30 triệu</option>
                                <option value="10">Trên 50 triệu</option>
                                <option value="11">Trên 100 triệu</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="1">
                                  Toàn thời gian cố định
                                </option>
                                <option value="2">
                                  Toàn thời gian tạm thời
                                </option>
                                <option value="3">Bán thời gian</option>
                                <option value="4">
                                  Bán thời gian tạm thời
                                </option>
                                <option value="5">Hợp đồng</option>
                                <option value="7">Việc làm từ xa</option>
                                <option value="6">Khác</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="0">Vui lòng chọn</option>
                                <option value="1">Mới tốt nghiệp</option>
                                <option value="6">Thực tập sinh</option>
                                <option value="3">Nhân viên</option>
                                <option value="5">Trưởng nhóm</option>
                                <option value="10">Phó tổ trưởng</option>
                                <option value="11">Tổ trưởng</option>
                                <option value="7">Phó trưởng phòng</option>
                                <option value="2">Trưởng phòng</option>
                                <option value="12">Phó giám đốc</option>
                                <option value="4">Giám đốc</option>
                                <option value="13">Phó tổng giám đốc</option>
                                <option value="14">Tổng giám đốc</option>
                                <option value="8">Quản lý cấp trung</option>
                                <option value="9">Quản lý cấp cao</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="0">Chưa có kinh nghiệm</option>
                                <option value="1">0 - 1 năm kinh nghiệm</option>
                                <option value="2">Hơn 1 năm kinh nghiệm</option>
                                <option value="3">Hơn 2 năm kinh nghiệm</option>
                                <option value="4">Hơn 5 năm kinh nghiệm</option>
                                <option value="5">
                                  Hơn 10 năm kinh nghiệm
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="0">Hôm nay</option>
                                <option value="1">1 tuần trở lại</option>
                                <option value="2">1 tháng trở lại</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">
                        Tìm Kiếm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p class="mb-0 text-white">
                <a data-toggle="modal" data-target="#advanceSearch"
                  >Tìm kiếm nâng cao</a
                >
              </p>
            </div>
          </div>

          <div class="col-4 text-center">
            <img src="@/assets/HomePage3.png" alt="" /><br />
            Việc làm từ xa
          </div>
        </div>
      </div>

      <div class="hot-job m-5 mx-auto">
        <h5>VIỆC LÀM HẤP DẪN</h5>
        <hr />
        <div class="job-container1">
          <div
            v-for="(job, id) in attractiveJob"
            :key="id"
            class="job row p-3 m-3 h-auto"
          >
            <div class="logo">
              <img style="width: 70px; height: 70px" :src="job.images" alt="" />
            </div>
            <div class="job-info w-75 h-auto pl-4">
              <span
                @click="jobDetail(job.id)"
                style="color: red; cursor: pointer"
                >{{ job.jobName }}</span
              ><br />
              <br />
              <img src="@/assets/icn_location.png" alt="" />
              <span> Vị trí: {{ job.position }} </span><br />
              <img src="@/assets/hn_icon.png" alt="" />
              <span> Hạn nộp: {{ job.deadlineForSubmission }}</span
              ><br />
              <img src="@/assets/dt_6.png" alt="" />
              <span> Bằng cấp: {{ job.degreeRequired }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="brand-job mt-5">
          <h5>VIỆC LÀM THƯƠNG HIỆU</h5>
          <hr />
          <div class="job-container2">
            <div
              v-for="(job, id) in urgentRecruitment"
              :key="id"
              class="job2 row p-3 m-3 h-auto"
            >
              <div class="logo">
                <img
                  style="width: 70px; height: 70px"
                  :src="job.images"
                  alt=""
                />
              </div>
              <div class="job-info w-75 h-auto pl-4">
                <span
                  @click="jobDetail(job.id)"
                  style="color: red; cursor: pointer"
                  >{{ job.jobName }}</span
                ><br />
                <br />
                <img src="@/assets/icn_location.png" alt="" />
                <span> Vị trí: {{ job.position }}</span
                ><br />
                <img src="@/assets/hn_icon.png" alt="" /><span>
                  Hạn nộp: {{ job.deadlineForSubmission }}</span
                ><br />
                <img src="@/assets/dt_6.png" alt="" />
                <span> Bằng cấp: {{ job.degreeRequired }} </span>
              </div>
            </div>
          </div>
          <div class="hotline mt-5">
            <div class="hotline-header">
              <h5>HOTLINE HỖ TRỢ CHI NTD VÀ ỨNG VIÊN</h5>
            </div>
            <div class="hotline-info p-3">
              <span>HOTLINE tư vấn tuyển dụng</span>
              <div class="row w-100 p-2">
                <div class="w-50">
                  <span>0982.079.209 - Nhóm Hiệp Nguyễn</span><br />
                  <span>0982.079.209 - Nhóm Toàn Nguyễn</span><br />
                  <span>0982.079.209 - Nhóm Tuấn Nguyễn</span><br />
                </div>
                <div class="w-50">
                  <span>0982.079.209 - Nhóm Hiệp Nguyễn</span><br />
                  <span>0982.079.209 - Nhóm Toàn Nguyễn</span><br />
                  <span>0982.079.209 - Nhóm Tuấn Nguyễn</span><br />
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div class="chat-recruiter mt-5">
          <h5>TÌM VIỆC THEO TỈNH THÀNH</h5>
          <div class="job-by-province">
            <span>Việc làm tại Hà Nội</span>
            <hr />
            <span>Việc làm tại Hồ Chí Minh</span>
            <hr />
            <span>Việc làm tại Đà Nẵng</span>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import LandingPageService from "@/services/LandingPageService.js";
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
import AddressService from "@/services/AddressService.js";

export default {
  name: "LandingPage",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      attractiveJob: [],
      urgentRecruitment: [],
      searchText: "",
      listProvince: [],
      selectedProvince: "",
    };
  },
  methods: {
    async getJobs() {
      await LandingPageService.getHomePage().then((res) => {
        this.attractiveJob = res.data.attractiveJob.slice(1, 10);
        this.urgentRecruitment = res.data.urgentRecruitment.slice(90, 100);
      });
    },
    getProvince() {
      AddressService.getProvince().then((res) => {
        this.listProvince = res.data;
      });
    },
    jobDetail(jobId) {
      this.$router.push({
        name: "JobDetailsNoLogin",
        params: { postingId: jobId },
      });
    },
    submit() {
      console.log(this.searchText);
      this.$router.push({
        name: "SearchJob",
        params: { searchText: this.searchText },
      });
    },
  },
  created() {
    this.getJobs();
    this.getProvince();
  },
};
</script>

<style scope>
.search-container {
  background-image: url("@/assets/landingPage.png");
  height: 100vh;
  width: 100%;
}

.search-form {
  width: 80%;
  text-align: center;
  margin: 50px 144px;
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

.advance {
  margin-top: 50px;
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding-top: 50px;
  opacity: 1;
}

.advance svg {
  width: 50px;
  height: 50px;
}

.hot-job {
  width: 80%;
}

.brand-job {
  width: 820px;
  margin-left: 150px;
  margin-right: 20px;
}

.job-container1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.job-container2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.job {
  width: 30%;
  height: 150px;
  margin: 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

.job2 {
  width: 45%;
  height: 150px;
  margin: 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

.chat-recruiter {
  width: 385px;
  padding: 0 30px;
}

.job-by-province {
  border-top: 1px solid #307df1;
  width: 100%;
  color: #307df1;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin: 15px;
  padding-top: 20px;
}

.hotline {
  position: absolute;
  width: 803px;
  height: 326px;
  left: 150px;
}

.hotline-header {
  color: white;
  padding: 15px;
  gap: 13px;
  width: 803px;
  height: 56px;
  background: #4c5bd4;
}

.hotline-info {
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  position: absolute;
  width: 803px;
}
</style>
