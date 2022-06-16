
<template>
  <div class="row">
    <div class="col-sm-2" style="padding: 0px">
      <SlideBar></SlideBar>
    </div>
    <div class="col-sm-10" style="padding: 0px;">
      <ProfileOnline></ProfileOnline>
    </div>
  </div>
</template>

<script>
import SlideBar from "@/components/ProfileCandidate/slideBar_candidate.vue";
import ProfileOnline from "@/components/ProfileCandidate/profile_online.vue";

export default {
  name: "LandingPage",
  components: {
    SlideBar,
    ProfileOnline,
  },
};
</script>

<style>
</style>
