<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" :dur="3" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">党建基层引领智慧管理平台</div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style scoped>
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  color: #fff;
}
.header-center-decoration {
  width: 40%;
  height: 60px;
  margin-top: 30px;
}
.header-left-decoration,
.header-right-decoration {
  width: 25%;
  height: 60px;
}
.center-title {
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  left: 50%;
  top: 15px;
  transform: translateX(-50%);
}
</style>