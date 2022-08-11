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
      class="row skills"
      @mouseover="isHiddenOptions = false"
      @mouseleave="isHiddenOptions = true"
    >
      <div class="col-12 text-left px-0">
        <div class="header h4 font-weight-bold pl-3 text-uppercase">
          KỸ NĂNG
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-10">
            <div v-for="(skill, index) in skills" :key="index">
              <div class="row">
                <div
                  class="col-12 custom-outline px-0 ml-3"
                  contenteditable="true"
                >
                  <strong style="font-size: 1.1rem">
                    {{ skill.skillName }}
                  </strong>
                </div>
                <div class="col-12">
                  <select class="custom-select">
                    <option selected>YEARS OF EXPERIENCE</option>
                    <option value="1">DƯỚI 6 THÁNG</option>
                    <option value="2">6-12 THÁNG</option>
                    <option value="3">1-2 NĂM</option>
                    <option value="3">2-3 NĂM</option>
                    <option value="3">3-4 NĂM</option>
                    <option value="3">TRÊN 5 NĂM</option>
                  </select>
                </div>
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
  name: "Skills",
  data() {
    return {
      skills: [
        {
          skillName: "Tìm kiếm, đọc hiểu tài liệu tiếng anh chuyên môn",
          yearOfExperience: 1,
        },
        {
          skillName: "Có tư duy logic tốt, nắm vững lập trình Java",
          yearOfExperience: 2,
        },
        {
          skillName: "Kỹ năng tổ chức code MVC, MVP trong Android",
          yearOfExperience: 2,
        },
        {
          skillName: "Thành thạo công cụ Android studio/ Eclipse",
          yearOfExperience: 2,
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
    check: function () {},
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

.skills {
  padding: 0.5rem;
}

.skills:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>