<template>
  <div class="container-fluid news-container">
    <div class="container py-5">
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <img
                class="img-fluid"
                src="@/assets/tra_cuu_luong.png"
                alt="Tra cứu lương"
              />
            </div>
            <div class="col-12 text-center h5 lookup_salary">
              <button class="search-btn text-white py-1 px-3">
                Tra cứu lương tại đây
              </button>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <img
                class="img-fluid"
                src="@/assets/ss_luong.png"
                alt="So sánh lương"
              />
            </div>
            <div class="col-12 text-center h5 compare_salary">
              <button class="search-btn text-white py-1 px-3">
                So sánh lương tại đây
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LookupInformation",
  data() {
    return {
      newss: [
        {
          img: require("@/assets/iip1635479355.jpg"),
          title: "Những chỉ tiêu đo lường KPI cho Developer chính xác hiệu quả",
        },
        {
          img: require("@/assets/kpz1624935240.jpg"),
          title: "Mẫu CV cho sinh viên IT mới ra trường sáng tạo nhất",
        },
        {
          img: require("@/assets/gti1617614347.jpg"),
          title:
            "Data center là gì? Tại sao Data Center cần thiết với người dùng?",
        },
      ],
    };
  },
};
</script>

<style scoped>
.news-container {
  background: #ffffff;
  box-shadow: 4px 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
}

.search-btn {
  background: #307df1;
  border-radius: 1.2rem;
}

.lookup_salary {
  margin-top: 2rem;
}

.compare_salary {
  margin-top: 2.3rem;
}
</style>