<template>
  <div>
    <!-- <router-view style="height: 100%"></router-view> -->
    <saved-job />
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