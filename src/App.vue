<template>
  <div>
    <router-view></router-view>
    <UpdateProfileRecruiter/>
  </div>
</template>

<script>

import UpdateProfileRecruiter from "./views/HieuPT/UpdateProfileRecruiter.vue"

export default {
  name: "App",
  components: { UpdateProfileRecruiter },
};
</script>

<style>
</style>