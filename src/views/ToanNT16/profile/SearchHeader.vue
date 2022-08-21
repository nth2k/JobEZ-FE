<template>
  <div class="d-flex flex-column">
    <!-- P1. Form Search -->
    <div
      class="box_m_search d-flex flex-column justify-content-center align-items-center search-container"
    >
      <div class="search-area">
        <form class="d-flex flex-row">
          <div class="order-0 serach-text">
            <input
              class="bg-light pl-4"
              type="text"
              id="fts_id"
              placeholder="Nhập tên công việc, vị trí ..."
              autocomplete="off"
              v-model="textSearch"
            />
          </div>

          <div class="order-1 province-list">
            <select
              id="province-list"
              class="text-center bg-light"
              @change="onChangeProvince()"
            >
              <option value="0">Chọn tỉnh thành</option>
              <option
                v-for="province in provinces"
                :key="province.province_id"
                :class="{ 'text-center': isClickProvince }"
                :value="province.province_id"
                @click="isClickProvince = !isClickProvince"
              >
                {{ province.province_name }}
              </option>
            </select>
          </div>
          <div class="mobi-bor order-2 job-search-btn">
            <input @click="searchJob" class="btn_search" value="Tìm kiếm" />
          </div>
        </form>
      </div>
      <!-- P2. Tìm kiếm nâng cao -->
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
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Tìm Kiếm Nâng Cao
                </h5>
              </div>
              <div class="modal-body container-fluid">
                <div class="search-content">
                  <div class="row">
                    <div class="col-sm">
                      <div class="form-group">
                        <select
                          @change="changeCityByProvince"
                          class="form-control"
                        >
                          <option value="0">Chọn tỉnh thành</option>
                          <option
                            v-for="province in provinces"
                            :key="province.province_id"
                            :class="{ 'text-center': isClickProvince }"
                            :value="province.province_id"
                            @click="isClickProvince = !isClickProvince"
                          >
                            {{ province.province_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm">
                      <div class="form-group">
                        <select class="form-control">
                          <option value="0">Chọn trình độ học vấn</option>
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
                          <option value="14">Thạc sĩ Kỹ thuật ứng dụng</option>
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
                        <select class="form-control">
                          <option>Chọn quận huyện</option>
                          <option
                            v-for="district in districts"
                            :key="district.district_id"
                            :class="{ 'text-center': isClickProvince }"
                            :value="district.district_id"
                            @click="isClickProvince = !isClickProvince"
                          >
                            {{ district.district_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <div class="form-group">
                        <select class="form-control">
                          <option value="0">Chọn giới tính</option>
                          <option value="1">Nam</option>
                          <option value="2">Nữ</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm">
                      <div class="form-group">
                        <select class="form-control">
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
                        <select class="form-control">
                          <option value="0">Chọn hình thức</option>
                          <option value="1">Toàn thời gian cố định</option>
                          <option value="2">Toàn thời gian tạm thời</option>
                          <option value="3">Bán thời gian</option>
                          <option value="4">Bán thời gian tạm thời</option>
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
                        <select class="form-control">
                          <option value="0">Chọn cấp bậc</option>
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
                        <select class="form-control">
                          <option value="0">Chọn kinh nghiệm</option>
                          <option value="0">Chưa có kinh nghiệm</option>
                          <option value="1">0 - 1 năm kinh nghiệm</option>
                          <option value="2">Hơn 1 năm kinh nghiệm</option>
                          <option value="3">Hơn 2 năm kinh nghiệm</option>
                          <option value="4">Hơn 5 năm kinh nghiệm</option>
                          <option value="5">Hơn 10 năm kinh nghiệm</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm">
                      <div class="form-group">
                        <select class="form-control">
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
                <button type="button" class="btn btn-primary">Tìm Kiếm</button>
              </div>
            </div>
          </div>
        </div>
        <p class="mb-0 text-white">
          Cần thêm nhiều tùy chọn tìm kiếm?
          <a
            data-toggle="modal"
            data-target="#advanceSearch"
            class="nangcao"
            style="color: #fff600"
            >Tìm kiếm nâng cao</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      provinces: [],
      districts: [],
      isClickProvince: false,
      textSearch: "",
    };
  },
  methods: {
    async fetProvinceData() {
      const res = await fetch("https://vapi.vnappmob.com/api/province");
      const data = await res.json();
      data.results.forEach((province) =>
        this.provinces.push({
          province_id: province.province_id,
          province_name: province.province_name,
        })
      );
    },
    async changeCityByProvince(e) {
      const provinceId = e.target.value;
      const res = await fetch(
        `https://vapi.vnappmob.com/api/province/district/${provinceId}`
      ).then((response) => response.json());
      res.results.forEach((district) =>
        this.districts.push({
          district_id: district.district_id,
          district_name: district.district_name,
        })
      );
    },
    searchJob(){
      this.$router.push({
        name: "SearchJob",
        params: { searchText: this.textSearch },
      });
      console.log();
    }
  },
  async created() {
    await this.fetProvinceData();
  },
  computed: {
    ...mapGetters(["getJob"]),
    ...mapState(["job"]),
  },
};
</script>

<style scoped>
* {
  border: 0px solid;
}

.search-container {
  background-image: url("@/assets/new_banner2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.search-area {
  margin-top: 6rem !important;
  width: 55rem !important;
}

.search-area form div {
  height: 4rem !important;
}

.search-area form div input,
.search-area form div select {
  width: 100% !important;
  height: 100% !important;
}

.serach-text {
  width: 28rem !important;
}

#fts_id {
  border-top-left-radius: 2rem 2rem !important;
  border-bottom-left-radius: 2rem 2rem !important;
  width: 100% !important;
  border-right: 0.1rem solid #4c5bd4;
}

.province-list {
  width: 15rem !important;
}

.job-search-btn {
  width: 8rem !important;
}

.job-search-btn input {
  border-top-right-radius: 2rem 2rem !important;
  border-bottom-right-radius: 2rem 2rem !important;
  background-color: #fff600;
}

.search_nc p a:hover {
  text-decoration: none !important;
}

.nangcao {
  cursor: pointer;
}

.search-content {
  border-bottom: 1px solid gray;
}

select {
  border: 1px solid gray;
}
</style>