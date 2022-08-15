<template>
  <div v-if="isGetCvFunction">
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
          <div
            v-for="(item, index) in getCV.educations"
            :key="index"
            @keyup="updateEducation(index)"
            class="row"
          >
            <div class="col-10">
              <div class="education-content">
                <div
                  ref="educationName"
                  class="school-name custom-outline py-1"
                  contenteditable="true"
                >
                  <strong>{{ item.universityName }}</strong>
                </div>
                <div
                  ref="educationMajor"
                  class="school-major custom-outline"
                  contenteditable="true"
                >
                  Ngành học: {{ item.major }}
                </div>
                <div
                  class="school-narrow-major custom-outline"
                  contenteditable="true"
                >
                  Chuyên ngành: {{ item.major }}
                </div>
                <div
                  ref="educationClassification"
                  class="school-classification custom-outline"
                  contenteditable="true"
                >
                  Xếp loại: {{ item.classification }}
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Education",
  data() {
    return {
      educations: [],
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    ...mapActions(["setEducation"]),
    hidden() {
      this.isHidden = !this.isHidden;
    },
    updateEducation: function (index) {
      const id = this.getCV.educations[index].id;
      const educationName = this.$refs["educationName"][index].textContent;
      const educationMajor = this.$refs["educationMajor"][index].textContent;
      const educationClassification =
        this.$refs["educationClassification"][index].textContent;

      const education = {
        id: id,
        universityName: educationName,
        major: educationMajor,
        classification: educationClassification,
      };

      const indexOf = this.educations.findIndex((ed) => ed.id == education.id);
      if (indexOf == -1) {
        this.educations.push(education);
      } else {
        this.educations[index] = education;
      }

      this.setEducation({ education: this.educations });
    },
  },
  computed: {
    ...mapGetters(["isGetCvFunction", "getCV"]),
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