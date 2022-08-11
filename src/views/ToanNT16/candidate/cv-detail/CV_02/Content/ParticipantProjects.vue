<template>
  <div :class="{ 'd-none': isHidden }">
    <div class="row">
      <div
        class="col-12 bg-secondary p-2 option-container"
        :class="{ invisible: isHiddenOptions }"
        @mouseover="isHiddenOptions = false"
        @mouseleave="isHiddenOptions = true"
      >
        <i
          class="fa fa-bars py-1 px-2 bg-white rounded mr-1"
          id="move"
          ref="move"
        ></i
        ><i
          class="fa fa-arrow-up py-1 px-2 bg-white rounded mr-1"
          aria-hidden="true"
          id="moveUp"
          ref="moveUp"
        ></i>
        <i
          class="fa fa-arrow-down py-1 px-2 bg-white rounded mr-1"
          aria-hidden="true"
          id="moveDown"
          ref="moveDown"
        ></i>
        <i
          class="fa fa-minus py-1 px-5 bg-danger rounded mr-1"
          aria-hidden="true"
          id="hidden"
          ref="hidden"
          @click="hidden"
          >Ẩn</i
        >
      </div>
    </div>
    <div
      class="row education-container"
      @mouseover="isHiddenOptions = false"
      @mouseleave="isHiddenOptions = true"
    >
      <div class="col-12 text-left px-0 border-bottom">
        <div class="header h4 font-weight-bold pl-3 text-uppercase">
          dự án tham gia
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-10">
            <div v-for="(project, index) in projects" :key="index">
              <div class="projects-name custom-outline">
                <strong contenteditable="true">{{
                  project.projectName
                }}</strong>
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
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    hidden() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<style scoped>
.header {
  border-left: 1.3rem solid #ffcc00;
  color: #ffffff;
  line-height: 1.2rem;
  font-weight: 1.2rem;
  background-color: #59b300;
  padding: 0.3rem;
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