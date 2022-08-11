<template>
  <div v-if="isGetRecruiterFunction" class="recruiter-header">
    <div class="container">
      <div class="row pb-4">
        <div class="col-12 col-md-2 header-logo-image">
          <img src="@/assets/avatar213631.jpg" alt="Hãng Dược Phẩm Nutramed" />
        </div>
        <div class="col-12 col-md-10 container">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="headers-info-name" style="color: #4c5bd4">
                {{ getRecruiter.recruiterName }}
              </div>
            </div>
            <div class="col-12">
              <button class="chat_call py-3 px-5" rel="noindex,nofollow" type="submit">
                Chat ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecruitorHeader",
  computed: {
    ...mapGetters(["getRecruiter", "isGetRecruiterFunction"]),
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto";
  font-style: normal;
}

.recruiter-header {
  border-bottom: 5px solid rgb(0 0 0 / 10%);
}

.header-logo-image {
  border-radius: 1rem;
}

.headers-info-name {
  font-weight: 550;
  font-size: 2rem;
  line-height: 2.2rem;
}

.headers-info-name:hover {
  text-decoration: none;
}

.chat_call {
  background: #ffffff;
  border: 1px solid #6f6f6f;
  border-radius: 3px;
  color: #6f6f6f;
  text-align: center;
  cursor: pointer;
}
</style>
