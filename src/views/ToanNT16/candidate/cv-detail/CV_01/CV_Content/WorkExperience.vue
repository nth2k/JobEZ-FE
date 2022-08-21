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
        class="row work-experience-container"
        @mouseover="isHiddenOptions = false"
        @mouseleave="isHiddenOptions = true"
      >
        <div class="col-12 text-left px-0 border-bottom">
          <div class="header h4 font-weight-bold pl-3 text-uppercase">
            Kinh nghiệm làm việc
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-10">
              <div
                v-for="(experience, index) in getCV.workExperiences"
                :key="index"
                @keyup="updateWorkExperience(index)"
                class="work-experience-content mb-3"
              >
                <div ref="companyName" class="company-name custom-outline py-1">
                  <strong class="text-primary">{{
                    experience.companyName
                  }}</strong>
                </div>
                <div ref="date" class="skills custom-outline text-info">
                  {{ experience.startDate }} - {{ experience.endDate }}
                </div>
                <div ref="position" class="position custom-outline">
                  Vị trí: {{ experience.position }}
                </div>
                <div ref="description" class="skills custom-outline">
                  {{ experience.description }}
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
  name: "WorkExperience",
  data() {
    return {
      experiences: [],
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    ...mapActions(["setWorkExperience"]),
    hidden() {
      this.isHidden = !this.isHidden;
    },
    updateWorkExperience: function (index) {
      const id = this.getCV.workExperiences[index].id;
      const companyName = this.$refs["companyName"][index].textContent;
      const date = this.$refs["date"][index].textContent;
      const startDate = date.slice(0, 11);
      const endDate = date.slice(14);
      const position = this.$refs["position"][index].textContent;
      const description = this.$refs["description"][index].textContent;

      const experience = {
        id: id,
        companyName: companyName,
        startDate: startDate,
        endDate: endDate,
        position: position,
        description: description,
      };

      const indexOf = this.experiences.findIndex(
        (ex) => ex.id == experience.id
      );
      if (indexOf == -1) {
        this.experiences.push(experience);
      } else {
        this.experiences[index] = experience;
      }

      this.setWorkExperience({ workExperience: this.experiences });
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
  line-height: 1.4rem;
  font-weight: 1.3rem;
}

.company-name {
  line-height: 1.5rem;
  font-size: 1.4rem;
}
.work-experience-container {
  padding: 0.5rem;
}

.work-experience-container:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>