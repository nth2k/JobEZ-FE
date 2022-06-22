<template>
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
            <div contenteditable="true" id="birthday" class="custom-outline">
              01/01/1995
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-1 px-0"><i class="fa fa-transgender"></i></div>
          <div class="col-10">
            <div contenteditable="true" id="gender" class="custom-outline">
              Nam
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 text-left">
        <div class="row">
          <div class="col-1 px-0"><i class="fa fa-phone"></i></div>
          <div class="col-10">
            <div contenteditable="true" id="phone" class="custom-outline">
              0845684888
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 text-left" style="margin-left: -0.2rem">
        <div class="row">
          <div class="col-1 px-0"><i class="material-icons">email</i></div>
          <div class="col-10">
            <div contenteditable="true" id="email" class="custom-outline">
              nguyenthetoan1606@gmail.com
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
            <div contenteditable="true" id="address" class="custom-outline">
              131 Phan Đình Giót, Thanh Xuân, Hà Nội
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
            <div contenteditable="true" id="facebook" class="custom-outline">
              https://www.facebook.com/toanfptedu/
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInfomation",
  data() {
    return {
      isHidden: false,
      isHiddenOptions: true,
    };
  },
  methods: {
    hidden() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<style scoped>
.header {
  border-left: 1.3rem solid #ffcc00;
  color: #ffffff;
  line-height: 1.2rem;
  font-weight: 1.2rem;
  background-color: #59b300;
  padding: 0.3rem;
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