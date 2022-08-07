<template>
  <v-app>
    <div>
      <router-view></router-view>
      <v-snackbar
        v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
        :key="snackbar.text + Math.random()"
        v-model="snackbar.showing"
        :color="snackbar.color"
        :style="`bottom: ${index * 60 + 8}px`"
        :timeout="snackbar.timeout"
      >
        {{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar.showing = false"
          >
            Đóng
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  components: {  },
  computed: {
    ...mapState(["snackbars"]),
  },
};
</script>

<style>
</style>