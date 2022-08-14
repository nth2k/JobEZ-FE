<template>
  <div v-if="isGetCvFunction" class="row">
    <div class="col-12 text-right">
      <div class="pt-5">
        <div class="col-12">
          <div class="candidate-name font-weight-bold text-uppercase">
            <div
              ref="candidateName"
              @keyup="updateHeaderData"
              class="custom-outline"
              :value="getCV.image"
            >
              {{ getCV.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-1 px-0" style="padding-top: 1.8rem">
          <div class="w-100 bg-primary" style="width: 2rem; height: 2rem"></div>
        </div>
        <div class="col-2 px-0 text-center">
          <div
            class="imagePreviewWrapper img-responsive mx-auto img-fluid"
            :style="{ 'background-image': `url(${previewImage})` }"
            style="background-position: center; background-size: cover"
            @click="selectImage"
          ></div>
          <input
            @change="displayImage"
            style="display: none"
            ref="fileInput"
            type="file"
            @input="pickFile"
          />
        </div>
        <div class="col-9 text-right px-0">
          <div
            ref="position"
            @keyup="updateHeaderData"
            class="candidate-position font-weight-normal text-uppercase pl-5 pr-5 custom-outline"
            contenteditable="true"
          >
            {{ getCV.position }}
          </div>
          <div class="w-100 bg-primary" style="width: 2rem; height: 2rem"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      previewImage: require("@/assets/no_avatar.jpg"),
      candidateName: "",
      image: null,
    };
  },
  methods: {
    ...mapActions(["setHeaderData"]),
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
      this.updateHeaderData();
    },

    displayImage: function () {},
    updateHeaderData: function () {
      const email = JSON.parse(window.localStorage.getItem("user")).user.email;
      const candidateName = this.$refs.candidateName.textContent;
      const desiredJobName = this.$refs.position.textContent;
      this.setHeaderData({
        candidateEmail: email,
        candidateName: candidateName,
        desiredJobName: desiredJobName,
        images: this.previewImage,
      });
    },
  },
  computed: {
    ...mapGetters(["getCV", "getImages", "getBase64", "isGetCvFunction"]),
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