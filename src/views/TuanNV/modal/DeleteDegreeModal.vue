<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn color="red" dark v-bind="attrs" v-on="on"> Xóa </v-btn> -->
      <span class="dropdown-item remove" v-bind="attrs" v-on="on"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash3"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
        Xóa</span
      >
    </template>
    <v-card>
      <v-card-title class="text-h5"> Xác nhận xóa!!! </v-card-title>
      <v-card-text>Bạn có chắc chắn muốn xóa bằng cấp này không?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false"> Không đồng ý </v-btn>
        <v-btn color="green darken-1" text @click="deleteDegree(id, userId)">
          Đồng ý
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DegreeService from "@/services/DegreeService";
export default {
  name: "DeleteDegreeModal",
  props: ["id", "userId"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    deleteDegree(id, userId) {
      //   console.log(id + "|" + userId);
      DegreeService.deleteDegree(id, userId)
        .then(() => {
          this.$store.dispatch("setSnackbar", {
            text: "Xóa thành công",
          });
          location.reload();
        })
        .catch(() => {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Có lỗi xảy ra! Vui lòng thử lại",
          });
        });
    },
  },
};
</script>

<style scoped></style>
