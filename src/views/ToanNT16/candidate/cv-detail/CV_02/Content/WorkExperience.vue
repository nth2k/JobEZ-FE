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
      class="row work-experience-container"
      @mouseover="isHiddenOptions = false"
      @mouseleave="isHiddenOptions = true"
    >
      <div class="col-12 text-left px-0 border-bottom">
        <div class="header h4 font-weight-bold pl-3 text-uppercase">
          Kinh nghiệm làm việc
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-10">
            <div
              v-for="(experience, index) in experiences"
              :key="index"
              class="work-experience-content"
            >
              <div
                class="company-name custom-outline py-1"
                contenteditable="true"
              >
                <strong>{{ experience.companyName }}</strong>
              </div>
              <div class="position custom-outline" contenteditable="true">
                Ngành học: {{ experience.position }}
              </div>
              <div class="skills custom-outline" contenteditable="true">
                {{ experience.skills }}
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

.company-name {
  line-height: 1.5rem;
  font-size: 1.4rem;
}
.work-experience-container {
  padding: 0.5rem;
}

.work-experience-container:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>