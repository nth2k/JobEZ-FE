<template>
  <div v-if="isGetPostingFunction" class="container">
    <div class="">
      <div class="text-center row">
        <div class="col-12">
          <div class="text-center h4 font-weight-bold text-primary">
            Việc Làm IT Phần Mềm Mới Nhất
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="pl-5 col-1">
              <img class="img-thumbnail" src="@/assets/nn_1.png" />
            </div>
            <div class="col-11">
              <div class="text-left h5 font-weight-bold text-dark">
                Tuyển Dụng, Tìm Việc Làm IT Phần Mềm Tháng 08/2022
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div
                v-for="(item, index) in getPostings.postings"
                :key="index"
                class="col-5 mr-5 mb-5 border"
              >
                <div class="row">
                  <div class="col-4">
                    <div class="img_cate">
                      <img
                        class="img-fluid"
                        :src="item.images"
                        :alt="item.jobName"
                      />
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="center_cate">
                      <div class="center_cate_l">
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
                          "
                          tag="a"
                          :to="{
                            name: 'JobDetailsNoLogin',
                            params: { postingId: item.postingId },
                          }"
                          >{{ item.jobName }}</router-link
                        >
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
                            params: { recruiterId: item.companyId },
                          }"
                          >{{ item.companyName }}</router-link
                        >
                        <p style="color: #6f6f6f">
                          {{ item.deadlineForSubmission }}
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
                            >{{ item.provinceName }}</span
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
                            >{{ item.salary }}</span
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
        <div class="col-12">
          <div class="paging-container">
            <div class="row">
              <div class="col-5"></div>
              <div class="col-2">
                <div v-if="isPostingCategoryFunction" class="row">
                  <div
                    class="col-2"
                    v-for="index in numberOfPage"
                    :key="index"
                    @click="
                      getPostingByCategory({
                        categoryId: getPostingByCategory.postingCategoryId,
                        pageOffSet: index,
                      })
                    "
                  >
                    <span
                      class="px-4 py-3 rounded text-center border"
                      style="cursor: pointer"
                      >{{ index }}
                    </span>
                  </div>
                </div>
                <div v-else-if="isProvinceFunction" class="row">
                  <div
                    class="col-2"
                    v-for="index in 3"
                    :key="index"
                    @click="
                      getPostingByProvince({
                        provinceId: getPostingByProvince.provinceId,
                        pageOffSet: index,
                      })
                    "
                  >
                    <span
                      class="px-4 py-3 rounded text-center border"
                      style="cursor: pointer"
                      >{{ index }}
                    </span>
                  </div>
                </div>
                <div v-else-if="isCityFunction" class="row">
                  <div
                    class="col-2"
                    v-for="index in numberOfPage"
                    :key="index"
                    @click="
                      getPostingByCity({
                        cityId: getPostings.cityId,
                        pageOffSet: index,
                      })
                    "
                  >
                    <span
                      class="px-4 py-3 rounded text-center border"
                      style="cursor: pointer"
                      >{{ index }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "JobCategoryContent",
  async created() {
    const provinceId = this.$route.params.provinceId;
    const cityId = this.$route.params.cityId;
    const categoryId = this.$route.params.postingCategory;
    const pageOffSet = this.$route.params.pageOffSet;
    if (provinceId !== undefined) {
      await this.getPostingByProvince({ provinceId, pageOffSet });
    } else if (cityId !== undefined) {
      await this.getPostingByCity({ cityId, pageOffSet });
    } else if (categoryId !== undefined) {
      await this.getPostingByCategory({ categoryId, pageOffSet });
    }
  },
  methods: {
    ...mapActions([
      "getPostingByCategory",
      "getPostingByProvince",
      "getPostingByCity",
    ]),
  },
  computed: {
    ...mapGetters([
      "getPostings",
      "isGetPostingFunction",
      "isPostingCategoryFunction",
      "isProvinceFunction",
      "isCityFunction",
    ]),
    ...mapState(["isGetPosting"]),
    numberOfPage() {
      return Math.round(this.getPostings.numberOfRecords / 30) + 1;
    },
  },
};
</script>
<style>
.page-number {
  cursor: pointer;
}
</style>
