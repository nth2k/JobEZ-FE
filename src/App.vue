<template>
  <div>
    <!-- <router-view></router-view> -->
    <!-- <TestApi /> -->
    <ViewNgoaiNguTinHoc />
  </div>
</template>

<script>
import ViewNgoaiNguTinHoc from './views/TuanNV/ViewNgoaiNguTinHoc.vue';
// import TestApi from "@/views/HiepViews/TestApi.vue"
export default {
  name: "App",
  components: { ViewNgoaiNguTinHoc },
};
</script>

<style>
</style>