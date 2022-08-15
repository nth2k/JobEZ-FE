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
              <div
                v-for="(skill, index) in getCV.skills"
                :key="index"
                @keyup="updateSkills(index)"
              >
                <div class="row">
                  <div
                    ref="skill"
                    class="col-12 custom-outline px-0 ml-3"
                    contenteditable="true"
                  >
                    <strong style="font-size: 1.1rem">
                      {{ skill.skillName }}
                    </strong>
                  </div>
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
  name: "Skills",
  data() {
    return {
      isHidden: false,
      isHiddenOptions: false,
      skills: [],
    };
  },
  methods: {
    ...mapActions(["setSkills"]),
    hidden() {
      this.isHidden = !this.isHidden;
    },
    updateSkills: function (index) {
      const skillName = this.$refs["skill"][index].textContent;
      console.log(skillName, index);
      const skill = {
        id: this.getCV.skills[index].id,
        skillName: skillName,
      };
      const indexOf = this.skills.findIndex((sk) => sk.id == skill.id);
      console.log(indexOf);
      if (indexOf == -1) {
        this.skills.push(skill);
      } else {
        this.skills[index] = skill;
      }
      this.setSkills({ skills: this.skills });
    },
  },
  computed: {
    ...mapGetters(["isGetCvFunction", "getCV"]),
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

.skills {
  padding: 0.5rem;
}

.skills:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>