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
      <div class="activities-name custom-outline py-1" contenteditable="true">
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