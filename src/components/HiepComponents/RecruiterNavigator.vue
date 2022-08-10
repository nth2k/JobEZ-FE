<template>
  <div class="navigator" style="height: 300vh">
    <div class="row m-0">
      <div class="col-12 custom-padding"></div>
      <div class="col-12 header">
        <div class="mt-4 mb-4 text-center">Hoàn thiện hồ sơ :</div>
        <div class="d-flex justify-content-center mb-3">
          <div class="">
            <div class="col-md-9 col-sm-6">
              <div class="progress blue">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">80%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 mx-auto text-center">
          <button class="refresh-profile">Làm mới hồ sơ</button>
        </div>
      </div>
      <div class="body col-12 text-left border-bottom">
        <div class="row">
          <div class="col-12 navigator-element active" @click="management">
            Quản lý chung
          </div>
          <div class="col-12 dropdown-items pr-0">
            <ul class="col-12 p-0 m-0">
              <div
                @click="isDropdownProfileVisible = !isDropdownProfileVisible"
              >
                Tin tuyển dụng
                <span class="ml-5 icon-items">
                  <img src="@/assets/ic_uv.png" />
                </span>
              </div>
              <li :class="{ 'd-none': isDropdownProfileVisible }">
                <div class="navigator-element" @click="addNewPosting">
                  Đăng tin mới
                </div>
              </li>
              <li :class="{ 'd-none': isDropdownProfileVisible }" ref="cvApply">
                <div class="navigator-element" @click="postedPosting">
                  Tin đã đăng
                </div>
              </li>
            </ul>
          </div>
          <div class="col-12 navigator-element" @click="searchCandidate">Tìm kiếm ứng viên</div>
          <div class="col-12 navigator-element" @click="appliedCandidate">Ứng viên ứng tuyển</div>
        </div>
      </div>
      <div class="footer col-12 navigator-element text-center mw-50">
        <div class="logout-element p-2 w-30">
          <img
            style="height: 1rem"
            class="img-fluid"
            src="@/assets/ic_dx.png"
            alt="Đăng xuất"
          />
          Đăng xuất
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecruiterNavigator",
  data() {
    return {
      isDropdownProfileVisible: true,
      isDropdownAccountManageable: true,
    };
  },
  components: {},
  methods: {
    addNewPosting() {
      this.$router.push("/recruiterAddNewPosting");
    },
    management() {
      this.$router.push("/recruiterManagement");
    },
    postedPosting() {
      this.$router.push("/recruiterPostedPosting");
    },
    searchCandidate(){
      this.$router.push("/searchCandidate");
    },
    appliedCandidate(){
      this.$router.push("/appliedCandidate");
    }
  },
};
</script>

<style scoped>
.navigator {
  background: #232f87;
  color: #ffffff;
  font-family: "Roboto";
}

.custom-padding {
  background-color: #4c5bd4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 3rem;
}

.header {
  border-bottom: 1px solid #ffffff;
}

.refresh-profile {
  background: #4c5bd4;
  border-radius: 1.2rem;
  padding: 0.5rem 2rem;
}

body {
  background-color: #e8f5e9;
  border-bottom: 1px solid #ffffff;
}

.padding {
  padding: 10rem !important;
}

.progress {
  width: 150px;
  height: 150px;
  line-height: 150px;
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative;
}

.progress:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 12px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.progress > span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}
.progress .progress-left {
  left: 0;
}
.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 12px;
  border-style: solid;
  position: absolute;
  top: 0;
}
.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.progress .progress-right {
  right: 0;
}
.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards;
}
.progress .progress-value {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: #44484b;
  font-size: 24px;
  color: #fff;
  line-height: 135px;
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
}
.progress.blue .progress-bar {
  border-color: #049dff;
}
.progress.blue .progress-left .progress-bar {
  animation: loading-2 1.5s linear forwards 1.8s;
}

.progress-left .progress-bar {
  animation: loading-3 1s linear forwards 1.8s;
}

.progress-left .progress-bar {
  animation: loading-4 0.4s linear forwards 1.8s;
}

.progress-left .progress-bar {
  animation: loading-5 1.2s linear forwards 1.8s;
}
@keyframes loading-1 {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(18deg);
  }

  20% {
    transform: rotate(36deg);
  }

  30% {
    transform: rotate(54deg);
  }

  40% {
    transform: rotate(72deg);
  }

  50% {
    transform: rotate(90deg);
  }

  60% {
    transform: rotate(108deg);
  }

  70% {
    transform: rotate(126deg);
  }

  80% {
    transform: rotate(144deg);
  }

  90% {
    transform: rotate(162deg);
  }

  100% {
    transform: rotate(180deg);
  }
}
@keyframes loading-2 {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(18deg);
  }

  20% {
    transform: rotate(36deg);
  }

  30% {
    transform: rotate(54deg);
  }

  40% {
    transform: rotate(72deg);
  }

  50% {
    transform: rotate(90deg);
  }

  60% {
    transform: rotate(108deg);
  }

  70% {
    transform: rotate(126deg);
  }

  80% {
    transform: rotate(144deg);
  }

  90% {
    transform: rotate(162deg);
  }

  100% {
    transform: rotate(180deg);
  }
}
@keyframes loading-3 {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(18deg);
  }

  20% {
    transform: rotate(36deg);
  }

  30% {
    transform: rotate(54deg);
  }

  40% {
    transform: rotate(72deg);
  }

  50% {
    transform: rotate(90deg);
  }

  60% {
    transform: rotate(108deg);
  }

  70% {
    transform: rotate(126deg);
  }

  80% {
    transform: rotate(144deg);
  }

  90% {
    transform: rotate(162deg);
  }

  100% {
    transform: rotate(180deg);
  }
}
@keyframes loading-4 {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(18deg);
  }

  20% {
    transform: rotate(36deg);
  }

  30% {
    transform: rotate(54deg);
  }

  40% {
    transform: rotate(72deg);
  }

  50% {
    transform: rotate(90deg);
  }

  60% {
    transform: rotate(108deg);
  }

  70% {
    transform: rotate(126deg);
  }

  80% {
    transform: rotate(144deg);
  }

  90% {
    transform: rotate(162deg);
  }

  100% {
    transform: rotate(180deg);
  }
}
@media only screen and (max-width: 990px) {
  .progress {
    margin-bottom: 20px;
  }
}

ul li {
  list-style-type: none;
  padding-left: 1rem;
}

.dropdown-items,
.last-element,
.navigator-element {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
}

.active {
  background: #1b2467;
  border-radius: 20px 0px 0px 20px;
  border-right: 4px solid #ffb229;
}

.navigator-element:hover {
  background: #1b2467;
  border-radius: 20px 0px 0px 20px;
  border-right: 4px solid #ffb229;
}

.logout-element {
  background: linear-gradient(180deg, #ffb229 60.98%, #ffb229 123.17%);
  border-radius: 20px;
}

.border-bottom {
  border-bottom: 1px solid white;
}
</style>