<template>
  <div class="container-fluid pt-1" id="suitable-jobs">
    <header><strong>// Việc Làm Phù Hợp</strong></header>
    <div class="row px-5 py-3">
      <div
        v-for="job in jobs"
        :key="job.logo"
        class="col-12 col-sm-6 border mr-2 row mb-4"
      >
        <div class="col-2">
          <img
            class="img-fluid mx-0"
            src="@/assets/no_img3.png"
            alt="Hinh Anh Cong Ty"
          />
        </div>
        <div class="col-8 row">
          <div class="col-12">{{ job.position }}</div>
          <div class="col-12">{{ job.company_name }}</div>
          <div class="col-12 row">
            <div class="col-3">{{ job.address }}</div>
            <div class="col-4 text-danger">{{ job.salary }}</div>
            <div class="col-4">{{ job.date_created }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuitableJobs",
  data() {
    return {
      jobs: [
        {
          logo: require("@/assets/no_img3.png"),
          position: "Java Developer",
          company_name: "Công ty Dịch vụ GPO",
          address: "Hà Nội",
          salary: "Thỏa Thuận",
          date_created: "|  15/06/2022",
        },
        {
          logo: require("@/assets/no_img3.png"),
          position: "Java Developer",
          company_name: "Công ty Dịch vụ GPO",
          address: "Hà Nội",
          salary: "20 - 30 triệu ",
          date_created: "|  15/06/2022",
        },
        {
          logo: require("@/assets/no_img3.png"),
          position: "Java Developer",
          company_name: "Công ty Dịch vụ GPO",
          address: "Hà Nội",
          salary: "10 - 15 triệu",
          date_created: "|  15/06/2022",
        },
        {
          logo: require("@/assets/no_img3.png"),
          position: "Java Developer",
          company_name: "Công ty Dịch vụ GPO",
          address: "Hà Nội",
          salary: "Trên 30 triệu ",
          date_created: "|  15/06/2022",
        },
        {
          logo: require("@/assets/no_img3.png"),
          position: "Java Developer",
          company_name: "Công ty Dịch vụ GPO",
          address: "Hà Nội",
          salary: "Thỏa Thuận",
          date_created: "|  15/06/2022",
        },
        {
          logo: require("@/assets/no_img3.png"),
          position: "Java Developer",
          company_name: "Công ty Dịch vụ GPO",
          address: "Hà Nội",
          salary: "Thỏa Thuận",
          date_created: "|  15/06/2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border;
}

#suitable-jobs {
  border-radius: 1rem;
  box-shadow: 4px 1px 20px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}
</style>