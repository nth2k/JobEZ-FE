<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12 px-0 text-center">
          <div
            class="imagePreviewWrapper img-responsive mx-auto img-fluid"
            :style="{ 'background-image': `url(${previewImage})` }"
            style="background-position: center; background-size: cover"
            @click="selectImage"
          ></div>
          <input
            style="display: none"
            ref="fileInput"
            type="file"
            @input="pickFile"
          />
        </div>
      </div>
    </div>
    <div class="col-12 text-center">
      <div class="pt-5">
        <div class="col-12">
          <div class="candidate-name font-weight-bold text-uppercase">
            <div contenteditable="true" class="custom-outline">
              Nguyễn Thế Toàn
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-center px-0">
      <div
        class="
          candidate-position
          font-weight-normal
          text-uppercase
          pl-5
          pr-5
          custom-outline
          text-center
        "
        contenteditable="true"
      >
        Lập trình viên android
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CvTop",
  data() {
    return {
      previewImage: require("@/assets/no_avatar.jpg"),
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
</script>

<style scoped>
.imagePreviewWrapper {
  width: 8.75rem;
  height: 9.25rem;
  border: 0.2rem solid #fcb617;
  padding: 0.5rem;
}

.imagePreviewWrapper:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}

.candidate-name {
  font-size: 2rem;
  line-height: 2.8rem;
  color: #59b300;
}
.candidate-position {
  font-size: 1.3rem;
  line-height: 1.8rem;
}

.custom-outline:focus {
  outline: none;
}

.custom-outline:hover {
  outline: #77a5cc dashed 1pt;
}
</style>