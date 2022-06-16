<template>
  <div>
    <div class="header">Head</div>
    <div style="margin-top: 25px; margin-left: 18px">
      // Hồ sơ xin việc online ( chưa hoàn thành )
    </div>
    <div class="boder_profile_online">
      <div class="col-sm-3" id="slide_bar_profile_online">
        <div>Tiến trình hồ sơ</div>
        <div class="circular-progress">
          <div class="value-container">0%</div>
        </div>
        <li class="item_slide_bar_small"> 
          <div class="item_slide_bar_selection_small">Thông tin liên hệ</div>
        </li>
        <li class="item_slide_bar_small">
          <div class="item_slide_bar_selection_small">Công việc mong muốn</div>
        </li>
        <li class="item_slide_bar_small">
          <div class="item_slide_bar_selection_small">Mục tiêu nghề nghiệp</div>
        </li>
        <li class="item_slide_bar_small">
          <div class="item_slide_bar_selection_small">Kỹ năng bản thân</div>
        </li>
        <li class="item_slide_bar_small">
          <div class="item_slide_bar_selection_small">Bằng cấp</div>
        </li>
        <li class="item_slide_bar_small">
          <div class="item_slide_bar_selection_small">Ngoại ngữ tin học</div>
        </li>
        <li class="item_slide_bar_small">
          <div class="item_slide_bar_selection_small">Kinh nghiệm làm việc</div>
        </li>
        <li class="item_slide_bar_small">
          <div class="item_slide_bar_selection_small">Người tham chiếu</div>
        </li>
      </div>
      <div class="col-sm-9"></div>
    </div>
  </div>
</template>

<script>
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 20;
let progressEndValue = 50;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
export default {
  name: "ProfileOnline",
};
</script>

<style scoped>
.header {
  padding: 0px;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  background-color: #4c5bd4;
  height: 163px;
}
.boder_profile_online {
  margin: 15px 25px 15px 15px;
  height: 586px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: var(--color_white);
  border-radius: 5px;
}

#slide_bar_profile_online {
  padding: 0px;
  height: 100%;
  border-right: 1px solid var(--color_gray);
}
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.circular-progress {
  position: relative;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
.circular-progress:before {
  content: "";
  position: absolute;
  height: 84%;
  width: 84%;
  background-color: #ffffff;
  border-radius: 50%;
}
.value-container {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  color: #231c3d;
}
h2 {
  color: #4c5bd4;
  margin-left: 80px;
}
.item_slide_bar_small {
  list-style: none;
  display: block;
  height: 36px;
  margin: 0 auto;
}
.item_slide_bar_selection_small {
  height: 100%;
  padding: 5px 5px 30px 30px;
  color: var(--color_text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  cursor: pointer;
}
.item_slide_bar_selection_small:hover {
  background-color: var(--color_hover);
  border-right: 3.5px solid var(--color_yellow);
}
</style>