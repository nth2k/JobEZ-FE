<template>
  <div v-if="isGetCvFunction" class="container-fluid">
    <v-form ref="form">
      <div
        @click="updateCandidateCv"
        class="text-center btn-primary btn px-4 py-4"
      >
        Lưu CV
      </div>
      <div class="row cv-container">
        <div class="col-12"></div>
        <div class="col-8 px-0">
          <div class="col-12"><Header /></div>
          <!-- CV -->
          <div class="row">
            <!-- Right -->
            <div class="col-5"><Right /></div>
            <!-- Content -->
            <div class="col-7 content-container"><CvContent /></div>
          </div>
        </div>
        <!-- CV liên quan -->
        <div class="col-4">
          <RelatedCV />
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/cv-detail/CV_01/Header.vue";
import Right from "@/views/ToanNT16/candidate/cv-detail/CV_01/Right.vue";
import CvContent from "@/views/ToanNT16/candidate/cv-detail/CV_01/CvContent.vue";
import RelatedCV from "@/views/ToanNT16/candidate/cv-detail/CV_01/RelatedCV.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "CV_01",
  components: {
    Header,
    Right,
    CvContent,
    RelatedCV,
  },
  async created() {
    const token = JSON.parse(window.localStorage.getItem("user"));
    const candidateId = token.user.id;
    this.getCvByCandidateId({ candidateId: candidateId });
  },
  methods: {
    ...mapActions(["getCvByCandidateId", "updateCv"]),
    updateCandidateCv() {
      const token = JSON.parse(window.localStorage.getItem("user"));
      const email = token.user.email;
      this.updateCv({ email });
      this.$store.dispatch("setSnackbar", {
        text: "Cập nhập CV thành công",
      });
    },
  },
  computed: {
    ...mapGetters(["isGetCvFunction", "getCV", "getBase64"]),
  },
};
</script>

<style scoped>
.cv-container {
  margin-left: 12rem;
  margin-right: 12rem;
}

.content-container {
  margin-top: -2rem;
}
</style>