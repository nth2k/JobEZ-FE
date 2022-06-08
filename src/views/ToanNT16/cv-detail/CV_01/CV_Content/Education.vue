<template>
  <div class="education-container">
    <header
      class="header h4 font-weight-bold pb-4 text-uppercase border-bottom"
    >
      học vấn
    </header>
    <div class="education-content">
      <div class="school-name" contenteditable="true">
        <strong>{{ education.school }}</strong>
      </div>
      <div class="school-major" contenteditable="true">
        Ngành học: {{ education.major }}
      </div>
      <div class="school-narrow-major" contenteditable="true">
        Chuyên ngành: {{ education.narrowMajors }}
      </div>
      <div class="school-classification" contenteditable="true">
        Xếp loại: {{ education.classification }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      education: {
        school: "Đại Học FPT HN",
        major: "Kỹ thuật phần mềm",
        narrowMajors: "Hệ thống thông tin",
        classification: "Giỏi",
      },
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

.education-content {
  font-size: 1.2rem;
  line-height: 1.8rem;
}
</style>