<template>
  <form>
    <div id="form-letter" class="container mb-5">
      <div class="mx-auto text-center">
        <div class="h5 font-weight-bold mt-5">
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </div>
        <div
          class="border-bottom text-center mx-auto font-weight-bold h5"
          style="width: fit-content"
        >
          Độc lập - Tự do - Hạnh phúc
        </div>
        <div class="pl-4">
          <div class="profile-photo px-0">
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
        <div class="h4 font-weight-bold">SƠ YẾU LÝ LỊCH</div>
        <div class="h5 font-italic">TỰ THUẬT</div>
      </div>
      <div class="row px-2">
        <div class="col-8">
          Họ và tên:
          <span class="resume-declaration h-100 w-100" contenteditable="true">
            Nguyễn Thế Toàn</span
          >
        </div>
        <div class="col-4">
          Nam, Nữ:
          <span class="resume-declaration" contenteditable="true"> </span>
        </div>
      </div>
    </div>
    <div
      class="item button btn-topcv-primary text-center mx-auto mb-5 rounded"
      id="btn-save-file"
    >
      <div class="title px-2">Lưu và tải đơn</div>
      <i class="fa fa-floppy-o"></i>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormCurriculumVitae",
  data() {
    return {
      previewImage: require("@/assets/curriculum_vitae/ava_46.png"),
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
#form-letter {
  padding-top: 2.7rem;
  padding-left: 5.5rem;
  background-image: url("@/assets/curriculum_vitae/bg-hoso-1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  height: 69rem;
  width: 49rem;
}

* {
  line-height: 1.8rem;
}

.btn-topcv-primary {
  background-color: #02b5e1;
  width: fit-content;
}

.btn-topcv-primary:hover,
.btn-topcv-primary:focus,
.btn-topcv-primary:active {
  background-color: #ff9a00;
  cursor: pointer;
}

.imagePreviewWrapper {
  width: 9rem;
  height: 9.69rem;
  border: 0;
  padding-left: 0.5rem;
}

.profile-photo {
  width: 8.25rem;
  height: 9.8rem;
}

.resume-declaration {
  border-bottom: 1px dotted black;
}
</style>