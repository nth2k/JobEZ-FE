<template>
  <div class="container-fluid">
    <div id="app" class="row">
      <div class="col-sm-2" id="slide_bar">
        <SlideBar_candidate />
      </div>
      <div class="col-sm-10">
        <div class="row">
          <Header />
        </div>
        <br/><br/>
        <div class="row">
          <ChangePasswordRecruiterForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import ChangePasswordRecruiterForm from "@/views/HieuPT/Form/ChangePasswordRecruiterForm.vue";
export default {
  name: "PostNew",
  components: {
    SlideBar_candidate,
    Header,
    ChangePasswordRecruiterForm,
  },
};
</script>

<style>
</style>