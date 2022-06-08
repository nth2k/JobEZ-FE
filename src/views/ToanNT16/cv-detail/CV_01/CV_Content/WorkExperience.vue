<template>
  <div class="work-experience-container">
    <header
      class="header h4 font-weight-bold pb-2 text-uppercase border-bottom"
    >
      Kinh nghiệm làm việc
    </header>
    <div
      v-for="experience in experiences"
      :key="experience.companyName"
      class="work-experience-content"
    >
      <div class="company-name" contenteditable="true">
        <strong>{{ experience.companyName }}</strong>
      </div>
      <div class="position" contenteditable="true">
        Ngành học: {{ experience.position }}
      </div>
      <div class="skills" contenteditable="true">
        {{ experience.skills }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkExperience",
  data() {
    return {
      experiences: [
        {
          companyName: "Công ty cổ phần CV365",
          position: "Vị trí: Lập trình viên Android (Từ ngày … đến hiện tại.)",
          jobDescription:
            "Lập trình ứng dụng di động theo kế hoạch của công ty: timviec365.vn, banthe24h.vn …",
          skills:
            "- Viết api của ứng dụng, làm việc với nhân viên thiết kế giao diện.- Duy trì và phát triển thêm tính năng của ứng dụng.,- Kỹ năng chuyên môn áp dụng trong công việc:, +/ Ngôn ngữ sử dụng: JAVA android +/ IDE: Android studio+/ Mô hình: MVP",
        },
        {
          companyName: "Công ty cổ phần CV365",
          position: "Vị trí: Thực tập sinh Android (Từ ngày … đến hiện tại.)",
          jobDescription:
            "Lập trình ứng dụng di động theo kế hoạch của công ty: timviec365.vn, banthe24h.vn …",
          skills:
            "-Học tập kiến thức của ngôn ngữ lập trình android <br />+/ Được học Android cơ bản, Activity, Fragment, Service, Custom view, Opengl, Canvas, Java native+/<br />Bổ sung thêm kiến thức nâng cao android, Increase performance application<br />Công việc thực tế được tham gia<br />Xây dựng các ứng dụng cơ bản: nghe nhạc, đọc báo, phần mềm quản lý.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  color: #fcb617;
  line-height: 1.2rem;
  font-weight: 1.2rem;
}

.work-experience-content {
  font-size: 1.2rem;
  line-height: 1.8rem;
}
</style>