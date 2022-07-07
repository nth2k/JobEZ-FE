<template>
  <div>
    <HeaderLogin />
    <SearchHeader />
    <CandidateNavigator />
    <BoxTiki />
    <JobContainer />
  </div>
</template>

<script>
import HeaderLogin from "@/views/ToanNT16/profile/Header_Login.vue";
import SearchHeader from "@/views/ToanNT16/profile/SearchHeader.vue";
import CandidateNavigator from "@/views/ToanNT16/profile/CandidateNavigator.vue";
import BoxTiki from "@/views/ToanNT16/profile/BoxTiki.vue";
import JobContainer from "@/views/ToanNT16/profile/JobContainer.vue";
import { useStore, mapGetters } from "vuex";
export default {
  name: "JobDetailsNoLogin",
  setup() {
    const store = useStore();
    console.log(store);
  },
  data() {
    return { id: null };
  },
  beforeCreate() {},
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch("fetchTransaction", { id: this.id });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  components: {
    HeaderLogin,
    SearchHeader,
    CandidateNavigator,
    BoxTiki,
    JobContainer,
  },
  computed: { ...mapGetters({ doneTodos: "doneTodos" }) },
};
</script>

<style>
</style>