<template>
  <div>
    <!-- <router-view></router-view> -->
    <!-- <TestApi /> -->
    <!-- <ViewNgoaiNguTinHoc /> -->
    <ViewKinhNghiemLamViec />
    <SavedJob />
  </div>
</template>

<script>
import ViewKinhNghiemLamViec from './views/TuanNV/ViewKinhNghiemLamViec.vue';
// import ViewNgoaiNguTinHoc from './views/TuanNV/ViewNgoaiNguTinHoc.vue';
// import SavedJob from './views/TuanNV/SavedJob.vue';
// import TestApi from "@/views/HiepViews/TestApi.vue"
export default {
  name: "App",
  components: {
    // ViewNgoaiNguTinHoc, 
    // SavedJob,
    ViewKinhNghiemLamViec
},
};
</script>

<style>
</style>