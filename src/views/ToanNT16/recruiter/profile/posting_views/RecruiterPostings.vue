<template>
  <div v-if="isGetRecruiterFunction">
    <div
      v-for="(item, index) of getRecruiter.postings"
      :key="index"
      class="container pt-4"
    >
      <div class="posting-header">{{ getRecruiter.recruiterName }}</div>
      <div class="posting-body posting-container">
        <div class="posting-article">
          <div class="row">
            <div class="col-10 p-0"></div>
            <div class="posting-date text-center text-light col-2 p-1">
              {{ item.deadlineForSubmission }}
            </div>
          </div>

          <div class="posting-content row">
            <div class="posting-brief col-12 col-sm-8">
              <div class="row">
                <div class="col-12">
                  <h3>
                    <router-link
                      class="posting-title"
                      tag="a"
                      :to="{
                        name: 'JobDetailsNoLogin',
                        params: { postingId: item.id },
                      }"
                      >{{ item.jobName }}</router-link
                    >
                    <a href="https://www.google.com/"></a>
                  </h3>
                </div>
                <div class="col-12 text-secondary">
                  <h5>{{ item.position }}</h5>
                </div>
                <div class="col-12">
                  <h5 class="text-danger font-weight-bold">
                    {{ item.salary }}
                  </h5>
                </div>
                <div class="col-12 row">
                  <div class="col-12 sol-sm-6 col-md-12">
                    <span
                      ><img class="pb-2 pr-2" src="@/assets/dt_5.png" alt=""
                    /></span>
                    {{ item.genderRequirement }}
                  </div>
                  <div class="col-12 sol-sm-6 col-md-12">
                    <span
                      ><img
                        class="pb-2 pr-2"
                        src="@/assets/dt_6.png"
                        alt=""
                      />{{ item.jobName }}</span
                    >
                  </div>
                  <div class="col-12 sol-sm-6 col-md-12">
                    <span
                      ><img
                        class="pb-2 pr-2"
                        src="@/assets/dt_7.png"
                        alt=""
                      />{{ item.province }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="posting-required col-12 col-sm-4">
              <div class="row">
                <div class="col-6 col-md-12">
                  <span
                    ><img
                      class="pb-2 pr-2"
                      src="@/assets/dt_9.png"
                      alt="hình thức làm việc" /></span
                  >{{ item.workingForm }}
                </div>
                <div class="col-6 col-md-12">
                  <span
                    ><img
                      class="pb-2 pr-2"
                      src="@/assets/dt_8.png"
                      alt="yêu cầu bằng cấp" /></span
                  >THPT trở lên
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="posting-description">
          <div class="mt-2">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecruiterPostings",
  computed: {
    ...mapGetters(["getRecruiter", "isGetRecruiterFunction"]),
  },
};
</script>

<style scoped>
* {
  font-family: Roboto-Regular, sans-serif !important;
}

.posting-container {
  border-top: 1px dashed gray;
  border-right: 1px dashed gray;
  border-bottom: 1px dashed gray;
  border-left: 4px solid gray;
}

.posting-header {
  color: #4c5bd4;
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.posting-body {
  padding: 0 1rem;
}

.posting-date {
  background: #fd3e45;
}

.posting-title {
  font-size: 1.4rem;
}

.posting-title:hover {
  text-decoration: none;
}

.posting-article {
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
}

.posting-description {
  font-style: normal;
  font-weight: 400;
}
</style>