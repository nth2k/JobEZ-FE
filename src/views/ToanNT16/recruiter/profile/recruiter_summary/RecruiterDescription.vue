<template>
  <div v-if="isGetRecruiterFunction">
    <div class="panel">
      <div class="panel-heading">
        <h5 class="panel-title mb-4">Mô tả công ty</h5>
        <h5>
          <strong>{{ getRecruiter.recruiterName }}</strong>
        </h5>
      </div>
      <!-- 1.     LỊCH SỬ THÀNH LẬP -->
      <article>
        <header>Mô tả công ty</header>
        <div>
          {{ getRecruiter.recruiterDescription }}
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecruiterDescription",
  computed: {
    ...mapGetters(["getRecruiter", "isGetRecruiterFunction"]),
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto";
  font-style: normal;
  font-size: 1rem;
  line-height: 1.6rem;
}

header {
  color: #2f972f;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

article div {
  margin-bottom: 1rem;
}

.panel-title {
  color: #4c5bd4;
  font-weight: 550;
  font-size: 1.7rem;
  line-height: 1.7rem;
}
</style>