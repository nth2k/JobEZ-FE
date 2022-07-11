<template>
  <div>
    <TopHeaderComponent />
    <div class="row">
      <ChooseCandidate />
      <div
        class="col-6"
        style="padding-left: 100px; padding-top: 100px; padding-right: 100px"
      >
        <p class="mt-2" style="font-weight: bold">
          Bước 2: Hoàn thành cv: Bạn chọn một trong hai cách sau để hoàn thành
          hồ sơ
        </p>
        <div class="row mt-5 mb-5">
          <div @click="onlineForm" class="cv-online">
            <img
              src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_desktop_computers.jpg"
              alt=""
            />
            <span style="font-weight: bold">Dùng Form Online</span>
          </div>
          <div @click="cvFromPC" class="cv-from-pc">
            <img
              src="https://png.pngtree.com/png-vector/20191030/ourlarge/pngtree-adaptive-computer-mobile-pc-responsive-icon-for-web-png-image_1927634.jpg"
              alt=""
            />
            <span style="font-weight: bold">Tải CV từ PC</span>
          </div>
        </div>
        <div class="guide p-2" style="margin-top: 60px">
          <span style="font-weight: bold; color: red">Hướng dẫn:</span>
          <p>
            <span style="font-weight: bold"
              >Tạo hồ sơ bằng mẫu khai báo trực tuyến:</span
            >
            bạn tạo mọi thông tin của mình để nhà tuyển dụng có cơ sở lựa chọn.
            Thông tin càng chi tiết, cơ hội việc làm của bạn càng tăng
          </p>
          <p>
            <span style="font-weight: bold"
              >Tải lên cv của bạn từ máy tính của bạn:</span
            >
            bạn đã chuẩn bị sẵn hồ sơ từ máy tính, bạn chỉ cần tải cv lên và xác
            nhận email để hoàn tất quá trình đăng ký.
          </p>
          <p style="font-weight: bold">
            Cả hai hồ sơ đều có thể tìm kiếm được bởi nhà tuyển dụng
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseCandidate from "@/components/HiepComponents/ChooseCandidate.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
export default {
  name: "ChooseCVType",
  components: {
    ChooseCandidate,
    TopHeaderComponent,
  },
  data() {
    return { candidateId: this.$route.params.id };
  },
  methods: {
    onlineForm() {
      this.$router.push({
        name: "CandidateOnlineCVForm",
        params: { id: this.candidateId },
      });
    },
    cvFromPC() {
      this.$router.push({
        name: "CVFromPCForm",
        params: { id: this.candidateId },
      });
    },
  },
};
</script>

<style scoped>
.cv-online {
  background-color: #ffefcf;
  margin-left: 80px;
  height: 150px;
  width: 150px;
  padding: 0;
  border-radius: 10px;
}

.cv-online img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

.cv-online span {
  display: none;
}

.cv-online:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 1s;
}

.cv-online:hover > span {
  display: inline-block;
}

.cv-from-pc {
  background-color: #e1f5ff;
  margin-left: 50px;
  height: 150px;
  width: 150px;
  border-radius: 10px;
}

.cv-from-pc img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

.cv-from-pc span {
  display: none;
}

.cv-from-pc:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 1s;
}

.cv-from-pc:hover > span {
  display: inline-block;
}

.guide {
  margin-top: 50px;
  background: #fbfbff;
  border: 1.5px dashed #b4c6e7;
  border-radius: 20px;
}
</style>