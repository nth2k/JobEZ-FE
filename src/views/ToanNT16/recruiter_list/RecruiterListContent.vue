<template>
  <div v-if="isGetAllRecruitersFunction" class="container">
    <div class="text-center row">
      <div class="col-12">
        <div class="text-center h4 font-weight-bold text-primary">
          Công Ty IT Phần Mềm Mới Nhất
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="pl-5 col-1">
            <img class="img-thumbnail" src="@/assets/nn_1.png" />
          </div>
          <div class="col-11">
            <div class="text-left h5 font-weight-bold text-dark">
              Danh Sách Công Ty IT
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="container">
          <div class="row">
            <div
              v-for="(item, index) in getRecruiters"
              :key="index"
              class="col-5 mr-5 mb-5 border"
            >
              <div class="row">
                <div class="col-4">
                  <div class="img_cate">
                    <img
                      class="img-fluid"
                      :src="item.images"
                      :alt="item.name"
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
                          name: 'RecruiterProfile',
                          params: { recruiterId: item.id },
                        }"
                        >{{ item.name }}</router-link
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
                          name: 'RecruiterLogin',
                          params: { recruiterId: item.id },
                        }"
                        >{{ item.companyName }}</router-link
                      >
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
                          >{{ item.recruiterDescription }}</span
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["getAllRecruiter"]),
  },
  computed: {
    ...mapGetters(["getRecruiters", "isGetAllRecruitersFunction", "getStore"]),
  },
};
</script>
<style>
</style>