<template>
  <div class="head-top">
    <el-header>
      <div class="title">{{ title }}</div>
      <div class="right">
        <div class="screen">智慧大屏</div>
        <div class="user">
          <img src="" alt="" />
          <span>用户名</span>
        </div>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "HeadTop",
  data() {
    return {
      title: "乡村数字化客户端",
    };
  },
};
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-weight: 700;
}
.right {
  display: flex;
}
</style>