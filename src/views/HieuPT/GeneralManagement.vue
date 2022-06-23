<template>
<div id="app" class="row">
  <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10"><Header />
    <div><span>//Thống Kê Tin Đăng</span></div>
    
    </div>
    </div>
    
</template>

<script>
import SlideBar_candidate from '@/components/ProfileCandidate/slideBar_candidate.vue';
import Header from '@/views/ToanNT16/candidate_management/Header.vue';
export default {
   name: "generalManagement",
  components:{
    SlideBar_candidate,
    Header
}
};
</script>

<style>

</style>