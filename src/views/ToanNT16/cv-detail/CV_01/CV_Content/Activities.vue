<template>
  <div class="activities-container">
    <header
      class="header h4 font-weight-bold pb-2 text-uppercase border-bottom"
    >
      hoạt động
    </header>
    <div
      v-for="activity in activities"
      :key="activity.activityName"
      class="work-experience-content"
    >
      <div class="activities-name" contenteditable="true">
        <strong>{{ activity.activityName }}</strong>
      </div>
      <div class="position" contenteditable="true">
        {{ activity.position }}
      </div>
      <div class="description" contenteditable="true">
        {{ activity.description }}
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
</style>