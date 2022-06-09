<template>
  <div class="education-container">
    <header
      class="header h4 font-weight-bold pb-2 text-uppercase border-bottom"
    >
      học vấn
    </header>
    <div class="education-content">
      <div class="school-name custom-outline py-1" contenteditable="true">
        <strong>{{ education.school }}</strong>
      </div>
      <div class="school-major custom-outline" contenteditable="true">
        Ngành học: {{ education.major }}
      </div>
      <div class="school-narrow-major custom-outline" contenteditable="true">
        Chuyên ngành: {{ education.narrowMajors }}
      </div>
      <div class="school-classification custom-outline" contenteditable="true">
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