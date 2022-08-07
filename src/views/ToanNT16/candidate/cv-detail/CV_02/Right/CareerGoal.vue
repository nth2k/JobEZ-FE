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
      class="row career-goal"
      @mouseover="isHiddenOptions = false"
      @mouseleave="isHiddenOptions = true"
    >
      <div class="col-12 text-left px-0">
        <div class="header h4 font-weight-bold pl-3 text-uppercase">
          MỤC TIÊU NGHỀ NGHIỆP
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-10">
            <div contenteditable="true" class="custom-outline">
              Không ngừng học hỏi trao dồi những kiến thức về lập trình để phát
              triển kỹ năng chuyên môn.
              <br />Mục tiêu trong 1 năm tới, tôi sẽ trở thành 1 lập trình viên
              Android chuyên nghiệp và học thêm lập trình IOS.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareerGoal",
  data() {
    return {
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

.career-goal {
  padding: 0.5rem;
}

.career-goal:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>