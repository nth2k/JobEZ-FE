<template>
  <div class="row skills">
    <div class="col-12 text-left px-0">
      <div class="header h4 font-weight-bold pl-3">KỸ NĂNG</div>
    </div>
    <div class="col-12 text-left">
      <div class="row">
        <div class="col-10">
          <div
            v-for="skill in skills"
            :key="skill.skillName"
            contenteditable="true"
          >
            <div class="row">
              <div class="col-12">
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
    };
  },
};
</script>

<style scoped>
.header {
  border-left: 4px solid gray;
  color: #fcb617;
  line-height: 1.2rem;
  font-weight: 1.2rem;
}
</style>