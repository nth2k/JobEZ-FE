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
        class="row basic-information"
        @mouseover="isHiddenOptions = false"
        @mouseleave="isHiddenOptions = true"
      >
        <div class="col-12 text-left px-0">
          <div class="header h4 font-weight-bold pl-3 text-uppercase">
            Thông tin cơ bản
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-1 px-0">
              <i class="fa fa-birthday-cake"></i>
            </div>
            <div class="col-10">
              <div ref="dateOfBirth" id="birthday" class="custom-outline">
                {{ getCV.dateOfBirth }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-1 px-0"><i class="fa fa-transgender"></i></div>
            <div class="col-10">
              <div ref="gender" id="gender" class="custom-outline">
                {{ getCV.gender }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-left">
          <div class="row">
            <div class="col-1 px-0"><i class="fa fa-phone"></i></div>
            <div class="col-10">
              <div ref="phone" id="phone" class="custom-outline">
                {{ getCV.phone }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-left" style="margin-left: -0.2rem">
          <div class="row">
            <div class="col-1 px-0"><i class="material-icons">email</i></div>
            <div class="col-10">
              <div ref="email" id="email" class="custom-outline">
                {{ getCV.email }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-left" style="margin-left: -0.3rem">
          <div class="row">
            <div class="col-1 px-0">
              <i class="material-icons">edit_location</i>
            </div>
            <div class="col-10">
              <div ref="address" id="address" class="custom-outline">
                {{ getCV.street }}, {{ getCV.city }}, {{ getCV.province }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-left">
          <div class="row">
            <div class="col-1 px-0">
              <i class="fa fa-facebook-official"></i>
            </div>
            <div class="col-10">
              <div id="facebook" class="custom-outline">
                {{ getCV.facebook }}
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
  name: "BasicInfomation",
  data() {
    return {
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    ...mapActions(["setBasicInformationData"]),
    hidden() {
      this.isHidden = !this.isHidden;
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

.basic-information {
  padding: 0.5rem;
}

.basic-information:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}

i {
  cursor: pointer;
}

.option-container {
  width: fit-content;
}
</style>