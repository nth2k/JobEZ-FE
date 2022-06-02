
<template>
 <div>
    <div class="col-sm-2" style="padding: 0;">
    <SlideBar ></SlideBar>
    </div>
    <div class="col-sm-10"></div>
 </div>
</template>

<script>

import SlideBar from "@/components/ProfileCandidate/slideBar_candidate.vue";
export default {
  name: "LandingPage",
  components: {
    SlideBar,
  },
};

</script>

<style>
</style>
