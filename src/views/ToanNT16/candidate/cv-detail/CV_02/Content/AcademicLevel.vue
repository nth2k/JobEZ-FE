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
          học vấn
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-10">
            <div class="education-content">
              <div
                class="school-name custom-outline py-1"
                contenteditable="true"
              >
                <strong>{{ education.school }}</strong>
              </div>
              <div class="school-major custom-outline" contenteditable="true">
                Ngành học: {{ education.major }}
              </div>
              <div
                class="school-narrow-major custom-outline"
                contenteditable="true"
              >
                Chuyên ngành: {{ education.narrowMajors }}
              </div>
              <div
                class="school-classification custom-outline"
                contenteditable="true"
              >
                Xếp loại: {{ education.classification }}
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
  name: "AcademicLevel",
  data() {
    return {
      education: {
        school: "Đại Học FPT HN",
        major: "Kỹ thuật phần mềm",
        narrowMajors: "Hệ thống thông tin",
        classification: "Giỏi",
      },
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

.school-name {
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