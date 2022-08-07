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
      <li class="second pl-3">Công Ty Tuyển Dụng</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecruiterListNavigator",
};
</script>

<style>
</style>