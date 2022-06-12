<template>
  <div class="row">
    <div class="col-12"><BasicInfomation /></div>
    <div class="col-12"><CareerGoal /></div>
    <div class="col-12"><Skills /></div>
    <div class="col-12"><Awards /></div>
    <div class="col-12"><Certificates /></div>
    <div class="col-12"><Favorites /></div>
    <div class="col-12"><References /></div>
  </div>
</template>

<script>
import BasicInfomation from "./Right/BasicInfomation.vue";
import CareerGoal from "./Right/CareerGoal.vue";
import Skills from "./Right/Skills.vue";
import Awards from "./Right/Awards.vue";
import Certificates from "./Right/Certificates.vue";
import Favorites from "./Right/Favorites.vue";
import References from "./Right/References.vue";
export default {
  name: "CvRight",
  components: {
    BasicInfomation,
    CareerGoal,
    Skills,
    Awards,
    Certificates,
    Favorites,
    References,
  },
};
</script>

<style>
</style>