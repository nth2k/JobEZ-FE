<template>
  <div class="row">
    <div class="col-12 mt-4">
      <div><BasicInfomation /></div>
    </div>
    <div class="col-12 mt-4"><CareerGoal /></div>
    <div class="col-12 mt-4"><Skills /></div>
    <div class="col-12 mt-4"><Award /></div>
    <div class="col-12 mt-4"><Certificate /></div>
    <div class="col-12 mt-4"><Favorites /></div>
    <div class="col-12 mt-4 mb-5"><References /></div>
  </div>
</template>

<script>
import BasicInfomation from "./Right/BasicInfomation.vue";
import CareerGoal from "./Right/CareerGoal.vue";
import Skills from "./Right/Skills.vue";
import Award from "./Right/Award.vue";
import Certificate from "./Right/Certificate.vue";
import Favorites from "./Right/Favorites.vue";
import References from "./Right/References.vue";

export default {
  name: "Right",
  components: {
    BasicInfomation,
    CareerGoal,
    Skills,
    Award,
    Certificate,
    Favorites,
    References,
  },
};
</script>

<style>
</style>