<template>
  <div class="container">
    <ul
      class="breadcrumb"
      style="margin-top: 0; background-color: #ffff"
      itemscope=""
      itemtype="http://schema.org/BreadcrumbList"
    >
      <li
        class="first"
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
      >
        <a href="https://timviec365.vn/" target="_blank" itemprop="item">
          <span itemprop="name">Trang chủ</span>
        </a>
        <meta itemprop="position" content="1" />
      </li>
      <li
        class="second pl-3"
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
      >
        <a
          href="https://timviec365.vn/viec-lam-dich-vu-c21v0"
          target="_blank"
          itemprop="item"
        >
          <span itemprop="name">Việc làm Dịch vụ</span>
        </a>
        <meta itemprop="position" content="2" />
      </li>
      <li
        class="pl-3"
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
      >
        <a itemprop="item"
          ><span itemprop="name"
            >NHÂN VIÊN KINH DOANH BẤT ĐỘNG SẢN TẠI HẢI PHÒNG</span
          ></a
        >
        <meta itemprop="position" content="3" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: bold;
}

a {
  text-decoration: none;
}

li.first::after,
li.second::after {
  content: ">";
  padding-left: 1rem;
  font-family: "Roboto";
  padding-top: 1rem;
  margin-top: 1rem;
}
</style>