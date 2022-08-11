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
      class="row activities-container"
      @mouseover="isHiddenOptions = false"
      @mouseleave="isHiddenOptions = true"
    >
      <div class="col-12 text-left px-0 border-bottom">
        <div class="header h4 font-weight-bold pl-3 text-uppercase">
          hoạt động
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-10">
            <div
              v-for="(activity, index) in activities"
              :key="index"
              class="work-experience-content"
            >
              <div
                class="activities-name custom-outline py-1"
                contenteditable="true"
              >
                <strong>{{ activity.activityName }}</strong>
              </div>
              <div class="position custom-outline" contenteditable="true">
                {{ activity.position }}
              </div>
              <div class="description custom-outline" contenteditable="true">
                {{ activity.description }}
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
  name: "Activities",
  data() {
    return {
      activities: [
        {
          activityName: "Tham gia chương trình mùa hè xanh 2016:",
          position: "Tình nguyện viên",
          description:
            "Dạy tin học cho trẻ em tại địa phương, nói chuyện chia sẻ về lợi ích của tin học trong cuộc sống mới…",
        },
        {
          activityName:
            "Tham gia cuộc thi code xuyên đêm Vietnam AI Hackathon 2017",
          position: "Người tham gia",
          description:
            " Nằm trong chuỗi sự kiện công nghệ lớn nhất năm dành cho cộng đồng công nghệ Việt Nam do tập đoàn FPT tổ chức.",
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

.activities-name {
  line-height: 1.5rem;
  font-size: 1.4rem;
}
.activities-container {
  padding: 0.5rem;
}

.activities-container:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>