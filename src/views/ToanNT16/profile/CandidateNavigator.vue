<template>
  <div v-if="isGetAPI" class="container">
    <ul
      class="breadcrumb"
      style="margin-top: 0; background-color: #ffff"
      itemscope=""
      itemtype="http://schema.org/BreadcrumbList"
    >
      <li
        class="first"
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
      >
        <router-link tag="a" :to="'/'">Trang chủ</router-link>
      </li>
      <li class="second pl-3">
        <router-link
          tag="a"
          :to="{
            name: 'JobCategory',
            params: { postingCategory: getJob.postingCategoryId },
          }"
          >{{ getJob.postingCategoryName }}</router-link
        >
      </li>
      <li class="pl-3">
        <p>
          <span>{{ formatTitle }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import JobDetailService from "@/services/JobDetailService";

export default {
  name: "CandidateNavigator",
  computed: {
    ...mapGetters(["getJob", "isGetAPI"]),
    formatTitle: function () {
      return JobDetailService.titleCase(this.getJob.jobName);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: bold;
}

a {
  text-decoration: none;
}

li.first::after,
li.second::after {
  content: ">";
  padding-left: 1rem;
  font-family: "Roboto";
  padding-top: 1rem;
  margin-top: 1rem;
}
</style>