<template>
  <div class="row">
    <div class="col-12 text-right">
      <div class="pt-5">
        <div class="col-12">
          <div class="candidate-name font-weight-bold text-uppercase">
            <div contenteditable="true">Nguyễn Thế Toàn</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-1 px-0" style="padding-top: 1.8rem">
          <div class="w-100 bg-primary" style="width: 2rem; height: 2rem"></div>
        </div>
        <div class="col-2 px-0">
          <div
            class="imagePreviewWrapper img-responsive img-thumbnail"
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
        <div class="col-9 text-right px-0">
          <div
            class="
              candidate-position
              font-weight-normal
              text-uppercase
              pl-5
              pr-5
            "
            contenteditable="true"
          >
            Lập trình viên android
          </div>
          <div class="w-100 bg-primary" style="width: 2rem; height: 2rem"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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

<style>
.imagePreviewWrapper {
  width: 8.75rem;
  height: 9.25rem;
}

.candidate-name {
  font-size: 2rem;
  line-height: 2.8rem;
}
.candidate-position {
  font-size: 1.3rem;
  line-height: 1.8rem;
}
</style>