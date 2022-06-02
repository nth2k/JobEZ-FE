<template>
  <div class="container-fluid">
    <header><strong>// Kinh Nghiệm Xin Việc IT Phần Mềm</strong></header>
    <div class="container">
      <div class="row">
        <div v-for="news in newss" :key="news.title" class="col-3">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" :src="news.img" alt="Hình ảnh bài viết" />
            <div class="card-body">
              <p class="card-title">{{ news.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
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

<style>
</style>