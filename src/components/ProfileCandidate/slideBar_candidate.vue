<template>
  <div class="col-sm-12" id="slide_bar">
    <div id="logo_timviec">
      <h2 style="color: #ffff">JOB EZ</h2>
    </div>
    <div id="border_point_profile">
      <div id="text_point_profile">Điểm lọc hồ sơ: 96</div>
    </div>
    <nav style="margin: 17px 0px; padding: 0px; width: 100%">
      <div class="item_slide_bar">
        <div class="item_slide_bar_selection">Quản lý chung</div>
      </div>
      <label for="bt1" class="item_slide_bar">
        <div class="item_slide_bar_selection">
          Bộ hồ sơ xin việc
          <svg class="icon_drop_up">
            <path
              d="M5.6752 5.97746C5.75157 5.95669 5.81349 5.92293 5.85156 5.88126L10.9585 0.310053C11.0555 0.204199 10.9768 0.0754949 10.7827 0.0225995C10.7281 0.00772152 10.6679 -1.25356e-05 10.6069 1.97191e-08L0.393032 1.97191e-08C0.176064 -5.02014e-05 0.000115395 0.0958345 0 0.214181C-2.28882e-05 0.247465 0.0141554 0.280297 0.0414314 0.310065L5.14836 5.88126C5.24516 5.98717 5.48102 6.03024 5.6752 5.97746Z"
              fill="white"
            />
          </svg>
        </div>
      </label>
      <input type="checkbox" id="bt1" />
      <ul style="margin: 0px; padding: 0px">
        <li class="item_slide_bar">
          <div class="item_slide_bar_selection" style="padding: 13px 0px 13px 50px">
            Hồ sơ online
          </div>
        </li>
        <li class="item_slide_bar">
          <div class="item_slide_bar_selection" style="padding: 13px 0px 13px 50px">
            CV xin việc
          </div>
        </li>
      </ul>
      <li class="item_slide_bar">
        <div class="item_slide_bar_selection">Việc làm</div>
      </li>
      <li class="item_slide_bar">
        <div class="item_slide_bar_selection" @click="appliedJob()">
          Việc làm đã ứng tuyển
        </div>
      </li>
      <li class="item_slide_bar">
        <div class="item_slide_bar_selection" @click="savedJob()">Việc làm đã lưu</div>
      </li>
      <label for="bt4" class="item_slide_bar">
        <div class="item_slide_bar_selection">
          Quản lý tài khoản
          <svg class="icon_drop_up">
            <path
              d="M5.6752 5.97746C5.75157 5.95669 5.81349 5.92293 5.85156 5.88126L10.9585 0.310053C11.0555 0.204199 10.9768 0.0754949 10.7827 0.0225995C10.7281 0.00772152 10.6679 -1.25356e-05 10.6069 1.97191e-08L0.393032 1.97191e-08C0.176064 -5.02014e-05 0.000115395 0.0958345 0 0.214181C-2.28882e-05 0.247465 0.0141554 0.280297 0.0414314 0.310065L5.14836 5.88126C5.24516 5.98717 5.48102 6.03024 5.6752 5.97746Z"
              fill="white"
            />
          </svg>
        </div>
      </label>
      <input type="checkbox" id="bt4" />
      <ul style="margin: 0px; padding: 0px">
        <li class="item_slide_bar">
          <div class="item_slide_bar_selection" style="padding: 13px 0px 13px 50px">
            Cập nhật thông tin
          </div>
        </li>
        <li class="item_slide_bar">
          <div class="item_slide_bar_selection" style="padding: 13px 0px 13px 50px">
            Đổi mật khẩu
          </div>
        </li>
      </ul>
    </nav>
    <div id="border_logout">
      <div id="text_logout">Đăng xuất</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    appliedJob() {
      this.$router.push("/appliedjob");
    },
    savedJob() {
      this.$router.push("/savedjobs");
    },
  },
};
</script>

<style>
:root {
  --color_blue: #4757b9;
  --color_main: #232f87;
  --color_yellow: #ffb229;
  --color_green: #73ad21;
  --color_white: #ffffff;
  --color_slide_bar_selection: #1b2467;
}
#slide_bar {
  height: 2000px;
  background-color: var(--color_main);
  padding: 0px;
}
#logo_timviec {
  height: 55px;
  width: 100%;
  text-align: center;
  background: var(--color_blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#border_point_profile {
  margin: 0px;
  height: 98px;
  width: 100%;
  padding-top: 29px;
  border-bottom: 2px solid var(--color_white);
}
#text_point_profile {
  margin: 0 auto;
  border-radius: 25px;
  width: 80%;
  height: 38px;
  font-weight: 600;
  padding-top: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  color: var(--color_white);
  background-color: var(--color_yellow);
}
.item_slide_bar {
  list-style: none;
  display: block;
}

.item_slide_bar_selection:hover {
  background-color: var(--color_slide_bar_selection);
  border-right: 3.5px solid var(--color_yellow);
}

.item_slide_bar_selection {
  margin-left: 15px;
  padding: 13px 0px 13px 30px;
  border-radius: 20px 0px 0px 20px;
  display: block;
  color: var(--color_white);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
}
#border_logout {
  margin: 0px;
  height: 68px;
  width: 100%;
  padding-top: 29px;
  border-top: 2px solid var(--color_white);
}
#text_logout {
  margin: 0 auto;
  border-radius: 25px;
  width: 80%;
  height: 38px;
  font-weight: 600;
  padding-top: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  color: var(--color_white);
  background-color: var(--color_yellow);
}
.icon_drop_up {
  float: right;
  margin: 10px 20px 10px 0px;
  width: 11px;
  height: 6px;
  fill: none;
}
[id^="bt"]:checked + ul {
  display: block;
}
input {
  display: none;
}
nav ul {
  display: none;
}
#top_header {
  height: 100px;
  min-height: 123px;
  background-color: #232f87;
}
</style>
