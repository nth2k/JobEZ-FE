<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red" dark v-bind="attrs" v-on="on"> Xóa </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5"> Xác nhận xóa!!! </v-card-title>
      <v-card-text>Bạn có chắc chắn muốn xóa công việc này không?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Không đồng ý
        </v-btn>
        <v-btn color="green darken-1" text @click="deletePosting(jobId)">
          Đồng ý
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import RecruiterManagementService from "@/services/RecruiterManagementService.js";
export default {
  name: "ConfirmModal",
  props: ["jobId"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    deletePosting(postingId) {
      RecruiterManagementService.deletePostingById(postingId)
        .then(() => {
          this.$store.dispatch("setSnackbar", {
            text: "Xóa công việc thành công",
          });
        })
        .catch(() => {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Có lỗi xảy ra! Vui lòng thử lại",
          });
        });
      console.log(postingId);
      this.$router.push("/recruiterManagement");
    },
  }
};
</script>

<style scoped>
</style>