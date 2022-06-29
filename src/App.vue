<template>
  <div>
    <router-view></router-view>
    <ChangePasswordRecruiter/>
  </div>
</template>

<script>

import ChangePasswordRecruiter from "./views/HieuPT/ChangePaswordRecruiter.vue"

export default {
  name: "App",
  components: { ChangePasswordRecruiter },
};
</script>

<style>
</style>