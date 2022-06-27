<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    console.log(this.$store.params.id);
    console.log(this.$store);
    this.$store.dispatch("fetchTransaction", { id: this.$store.params.id });
  },
};
</script>

<style>
</style>