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
        class="row award"
        @mouseover="isHiddenOptions = false"
        @mouseleave="isHiddenOptions = true"
      >
        <div class="col-12 text-left px-0">
          <div class="header h4 font-weight-bold pl-3 text-uppercase">
            GIẢI THƯỞNG
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-10">
              <div class="row">
                <div @keyup="updateAwards" ref="awards" class="col-10">
                  <div contenteditable="true" class="custom-outline">
                    {{ getCV.awards }}
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
  name: "Award",
  data() {
    return {
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    ...mapActions(["setAwards"]),
    hidden() {
      this.isHidden = !this.isHidden;
    },
    updateAwards: function () {
      const awards = this.$refs.awards.textContent;
      this.setAwards({ awards: awards });
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
.award {
  padding: 0.5rem;
}

.award:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>