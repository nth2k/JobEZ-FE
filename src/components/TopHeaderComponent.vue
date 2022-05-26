<template>
  <div class="header">
    <router-link to="/">
      <h2>JobEZ</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TopHeaderComponent",
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  position: absolute;
  height: 45px;
  left: 0px;
  top: 0px;
}

h2 {
  color: #4c5bd4;
  margin-left: 80px;
}
</style>