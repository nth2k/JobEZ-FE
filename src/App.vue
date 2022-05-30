<template>
  <div>
<<<<<<< HEAD
    <!-- <router-view style="height: 100%"></router-view> -->
    <saved-job />
=======
    <router-view class="h-100"></router-view>   
>>>>>>> 6be30c8b8c28c893ea3a4febf5a733af2fda1a97
  </div>
</template>

<script>
import SavedJob from './views/SavedJob.vue';

export default {
  name: "App",
  components: {SavedJob},
};
</script>

<style>
</style>