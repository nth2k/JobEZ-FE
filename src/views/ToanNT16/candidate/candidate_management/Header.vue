<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3"><ProfileHeader /></div>
      <div class="col-12"><CandidateSupport /></div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/views/candidate_views/candidate_management/candidate_management_profile/ProfileHeader.vue";
import CandidateSupport from "@/components/views/candidate_views/candidate_management/candidate_management_profile/CandidateSupport.vue";

export default {
  name: "Header",
  components: { ProfileHeader, CandidateSupport },
};
</script>

<style>
</style>