<template>
  <div class="container">
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
        {{ getJob.postingCategoryName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "JobCategoryNavigator",
  computed: {
    ...mapGetters(["getJob", "isGetAPI"]),
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
  padding-left: 1rem;
  font-family: "Roboto";
  padding-top: 1rem;
  margin-top: 1rem;
}
li.first::after {
  content: ">";
}
</style>
