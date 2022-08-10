<template>
  <div v-if="isGetAPI">
    <div class="uv_tab mw-100 mb-3">
      <span class="tablinks">Nộp Hồ Sơ</span>
    </div>
    <div class="uv_tab mw-100 mb-3">
      <span class="tablinks">Việc Làm Tương Tự</span>
    </div>
    <div class="box_vltt d-flex flex-column">
      <div
        v-for="(posting, index) in getJob.relatedPosting"
        :key="index"
        class="item_cate container p-0"
      >
        <div class="row">
          <div class="col-4">
            <div class="img_cate">
              <img
                class="img-fluid"
                :src="posting.images"
                :alt="posting.jobName"
              />
            </div>
          </div>
          <div class="col-8">
            <div class="">
              <div class="center_cate">
                <div class="center_cate_l">
                  <a
                    style="
                      color: #4c5bd5 !important;
                      font-size: 14px;
                      line-height: 25px;
                      height: 25px;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      float: left;
                      width: 100%;
                      font-weight: bold;
                    "
                    @click="getJobById({ postingId: posting.postingId })"
                  >
                    {{ posting.jobName }}
                  </a>
                  <router-link
                    style="
                      color: #4c5bd5 !important;
                      font-size: 14px;
                      line-height: 25px;
                      height: 25px;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      float: left;
                      width: 100%;
                      font-weight: bold;
                      text-transform: capitalize;
                    "
                    tag="a"
                    :to="{
                      name: 'RecruiterProfile',
                      params: { recruiterId: posting.companyId },
                    }"
                    >{{ posting.companyName }}</router-link
                  >
                  <p style="color: #6f6f6f">
                    {{ posting.deadlineForSubmission }}
                  </p>
                  <p>
                    <span class="cate_dd"
                      ><svg width="30px" height="30px">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="green"
                          stroke-width="4"
                          fill="yellow"
                        /></svg
                      >{{ posting.province }}</span
                    >
                    <span class="cate_ml"
                      ><svg width="30px" height="30px">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="green"
                          stroke-width="4"
                          fill="yellow"
                        /></svg
                      >{{ posting.salary }}</span
                    >
                  </p>
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
  name: "RelatedJob",
  computed: {
    ...mapGetters(["getJob", "isGetAPI"]),
  },
  methods: {
    ...mapActions(["getJobById"]),
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto";
  font-style: normal;
  box-sizing: border-box;
}
.tablinks {
  background: #182543;
  color: #ffffff;
  display: block;
  padding-top: 0.6rem;
  padding-left: 2rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.item_cate {
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  background: #ffffff;
}

.lazyloaded {
  display: block;
}

.img_cate img {
  object-fit: cover;
}

.cate_dd::before {
  content: "";
}

.cate_ml::before {
  content: "";
}
</style>