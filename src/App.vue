<template>
  <div>
    <Profile_candidate />
    <saved-job />
  </div>
</template>

<script>
import SavedJob from './views/SavedJob.vue'
import Profile_candidate from './views/profile_candidate.vue'
export default {
  components: { SavedJob, Profile_candidate },

}
</script>

<style>

</style>