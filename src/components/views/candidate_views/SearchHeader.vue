<template>
  <div class="d-flex flex-column">
    <!-- P1. Form Search -->
    <div
      class="
        box_m_search
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
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
            />
          </div>

          <div class="order-1 province-list">
            <select id="province-list" class="text-center">
              <option value="0">Chọn tỉnh thành</option>
              <option>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                </div>
              </option>
              <option
                v-for="province in provinces"
                :key="province.code"
                :class="{ 'text-center': isClickProvince }"
                :value="province.code"
                @click="isClickProvince = !isClickProvince"
              >
                {{ province.name }}
              </option>
            </select>
          </div>
          <div class="mobi-bor order-2 job-search-btn">
            <input type="submit" class="btn_search" value="Tìm kiếm" />
          </div>
        </form>
      </div>
      <!-- P2. Tìm kiếm nâng cao -->
      <div class="search_nc mb-3 mt-5">
        <p class="mb-0 text-white">
          Cần thêm nhiều tùy chọn tìm kiếm?
          <a class="nangcao" style="color: #fff600" href="javascript:void(0);"
            >Tìm kiếm nâng cao</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provinces: [],
      isClickProvince: false,
    };
  },
  methods: {
    async fetProvinceData() {
      const res = await fetch("https://provinces.open-api.vn/api/");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const data = await this.fetProvinceData();

    // this.provinces = data.map((el) => {
    //   el.name, el.code;
    // });

    this.provinces = data;
    console.log(this.provinces);
  },
};
</script>

<style scoped>
* {
  border: 0px solid;
}

div {
  background-image: url("../../../assets/new_banner2.png");
  font-size: 1rem;
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
</style>