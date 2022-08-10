<template>
  <div class="container-fluid news-container pb-5">
    <header class="mb-5">
      <strong>// Kinh Nghiệm Xin Việc IT Phần Mềm</strong>
    </header>
    <div class="row">
      <div
        v-for="(news, index) in newss"
        :key="index"
        class="col-3 title-container"
      >
        <div class="mr-3">
          <img class="card-img-top" :src="news.img" alt="Hình ảnh bài viết" />
          <div class="">
            <p class="card-title pt-2 pl-2 pb-5">
              <strong>{{ news.title }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-right">
        <strong><a class="text-dark" href="">Xem tất cả</a></strong>
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

.title-container {
  background: #f7f7f7;
}
</style>