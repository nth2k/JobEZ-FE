<template>
  <div class="education-container">
    <header
      class="header h4 font-weight-bold pb-2 text-uppercase border-bottom"
    >
      dự án tham gia
    </header>
    <div class="participant-projects-content">
      <div v-for="project in projects" :key="project.projectName">
        <div class="projects-name custom-outline">
          <strong contenteditable="true">{{ project.projectName }}</strong>
        </div>
        <div
          class="project-description custom-outline py-1"
          contenteditable="true"
        >
          {{ project.projectDescription }}
        </div>
        <div class="skill custom-outline" contenteditable="true">
          {{ project.skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParticipantProjects",
  data() {
    return {
      projects: [
        {
          projectName: "+/ Code app timviec365.vn",
          projectDescription:
            "Đây là dự án để kết nối nhà tuyển dụng và ứng viên có nhu cầu tìm việc",
          skill:
            "Ngôn ngữ sử dụng: Java Android Link app: https://play.google.com/store/apps/details?id=vn.timviec365.myapplication",
        },
        {
          projectName: "+/ Code app Banthe24h.vn",
          projectDescription:
            "Đây là dự án xây dựng ứng dụng bán thẻ điện thoại online, hỗ trợ nhanh chóng tiện ích giúp khách hàng mua thẻ cào điện thoại online 24/24h.",
          skill:
            "Ngôn ngữ sử dụng: Java Android Link app: https://play.google.com/store/apps/details?id=com.something.windows10now.muathe24h",
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

.projects-name {
  line-height: 1.5rem;
  font-size: 1.4rem;
}
.education-container {
  padding: 0.5rem;
}

.education-container:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>