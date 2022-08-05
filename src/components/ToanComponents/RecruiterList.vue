<template>
  <div>
    <HeaderLogin />
    <SearchHeader />
    <RecruiterListNavigator />
    <RecruiterListContent />
  </div>
</template>

<script>
import HeaderLogin from "@/views/ToanNT16/profile/Header_Login.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import RecruiterListNavigator from "@/views/ToanNT16/recruiter_list/RecruiterListNavigator.vue";
import RecruiterListContent from "@/views/ToanNT16/recruiter_list/RecruiterListContent.vue";
import { mapActions } from "vuex";
export default {
  name: "RecruiterList",
  components: {
    HeaderLogin,
    SearchHeader,
    RecruiterListNavigator,
    RecruiterListContent,
  },
  async created() {
    this.getAllRecruiter();
  },
  methods: {
    ...mapActions(["getAllRecruiter"]),
  },
};
</script>

<style>
</style>