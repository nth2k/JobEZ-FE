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
                v-for="(activity, index) in getCV.activities"
                :key="index"
                @keyup="updateActivities(index)"
                class="work-experience-content mb-3"
              >
                <div
                  ref="activityName"
                  class="activities-name custom-outline py-1"
                  contenteditable="true"
                >
                  <strong class="text-primary">{{
                    activity.acitvityName
                  }}</strong>
                </div>
                <div
                  ref="activityPosition"
                  class="position custom-outline text-info"
                  contenteditable="true"
                >
                  {{ activity.position }}
                </div>
                <div
                  ref="activityDescription"
                  class="description custom-outline"
                  contenteditable="true"
                >
                  {{ activity.description }}
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
  name: "Activities",
  data() {
    return {
      activities: [],
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    ...mapActions(["setActivity"]),
    hidden() {
      this.isHidden = !this.isHidden;
    },
    updateActivities: function (index) {
      const activityId = this.getCV.activities[index].id;
      const activityName = this.$refs["activityName"][index].textContent;
      const activityPosition =
        this.$refs["activityPosition"][index].textContent;
      const activityDescription =
        this.$refs["activityDescription"][index].textContent;

      const activity = {
        id: activityId,
        name: activityName,
        position: activityPosition,
        description: activityDescription,
      };

      const indexOf = this.activities.findIndex((ac) => ac.id == activity.id);
      if (indexOf == -1) {
        this.activities.push(activity);
      } else {
        this.activities[index] = activity;
      }
      this.setActivity({ activities: this.activities });
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