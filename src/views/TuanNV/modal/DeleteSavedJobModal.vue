<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red" dark v-bind="attrs" v-on="on"> Xóa </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5"> Xác nhận xóa!!! </v-card-title>
      <v-card-text>Bạn có chắc chắn muốn xóa công việc đã lưu này không?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false"> Không đồng ý </v-btn>
        <v-btn color="green darken-1" text @click="deleteSavedJob(postingId, userId)">
          Đồng ý
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SavedJobService from "@/services/SavedJobService.js";
export default {
  name: "DeleteSavedJobModal",
  props: ["postingId", "userId"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    deleteSavedJob(postingId, userId) {
      SavedJobService.deleteSavedJob({ user_id: userId, posting_id: postingId })
        .then(() => {
          this.$store.dispatch("setSnackbar", {
            text: "Xóa thành công",
          });
          location.reload();
        })
        .catch(() => {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Xóa không thành công",
          });
        });
    },
  },
};
</script>

<style scoped></style>
