<template>
  <div v-if="isGetRecruiterFunction" class="container">
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
        <router-link to="/">Trang Chủ</router-link>
        <meta itemprop="position" content="1" />
      </li>
      <li
        class="second pl-3"
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
      >
        <router-link to="/recruiter-list">Công ty tuyển dụng</router-link>
        <meta itemprop="position" content="2" />
      </li>
      <li
        class="pl-3"
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
      >
        <a itemprop="item"
          ><span itemprop="name">{{ getRecruiter.recruiterName }}</span></a
        >
        <meta itemprop="position" content="3" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RecruiterNavigator",
  methods: {
    ...mapActions(["getRecruiterById"]),
  },
  computed: {
    ...mapGetters(["getRecruiter", "isGetRecruiterFunction"]),
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