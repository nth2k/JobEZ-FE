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
            dự án tham gia
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-10">
              <div
                v-for="(project, index) in getCV.involvedProjects"
                :key="index"
                @keyup="updateParticipantProjects(index)"
              >
                <div ref="name" class="projects-name custom-outline">
                  <strong contenteditable="true">{{
                    project.projectName
                  }}</strong>
                </div>
                <div
                  ref="projectDescription"
                  class="project-description custom-outline py-1"
                  contenteditable="true"
                >
                  {{ project.projectDescription }}
                </div>
                <div
                  ref="description"
                  class="skill custom-outline"
                  contenteditable="true"
                >
                  {{ project.description }}
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
  name: "ParticipantProjects",
  data() {
    return {
      projects: [],
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    ...mapActions(["setParticipantProject"]),
    hidden() {
      this.isHidden = !this.isHidden;
    },
    updateParticipantProjects: function (index) {
      const id = this.getCV.involvedProjects[index].id;
      const name = this.$refs["name"][index].textContent;
      const projectDescription =
        this.$refs["projectDescription"][index].textContent;
      const description = this.$refs["description"][index].textContent;

      const project = {
        id: id,
        name: name,
        projectDescription: projectDescription,
        description: description,
      };

      const indexOf = this.projects.findIndex((pr) => pr.id == project.id);
      if (indexOf == -1) {
        this.projects.push(project);
      } else {
        this.projects[index] = project;
      }

      this.setParticipantProject({ participantProject: this.projects });
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

.projects-name {
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