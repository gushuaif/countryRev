<template>
  <div class="menuList">
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse-transition="false"
        :unique-opened="true"
      >
        <!-- 一级菜单 -->
        <el-submenu index="1">
          <!-- 一级菜单模板区域 -->
          <template slot="title">
            <!-- 图标 -->
            <!-- 文本 -->
            <span>哈哈哈</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item index="1-1">
            <template slot="title">
              <!-- 图标 -->
              <!-- 文本 -->
              <span>嘻嘻嘻</span>
            </template>
          </el-menu-item>
          <el-menu-item index="1-2">
            <template slot="title">
              <!-- 图标 -->
              <!-- 文本 -->
              <span>嘎嘎嘎</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <!-- 一级菜单 -->
        <el-submenu index="2">
          <!-- 一级菜单模板区域 -->
          <template slot="title">
            <!-- 图标 -->
            <!-- 文本 -->
            <span>我</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item index="2-1">
            <template slot="title">
              <!-- 图标 -->
              <!-- 文本 -->
              <span>你</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2-2">
            <template slot="title">
              <!-- 图标 -->
              <!-- 文本 -->
              <span>他</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  data() {
    return {
      menuList: [
        {
          title: "网络管理",
          children: [
            {
              authName: "网络数据看板",
            },
            {
              authName: "人员信息管理",
            },
            {
              authName: "房屋信息管理",
            },
            {
              authName: "网格区域管理",
            },
            {
              authName: "网络事件管理",
            },
          ],
        },
        {
          title: "集团管理",
          children: [{ authName: "集团数据看板" }, { authName: "积分管理" }],
        },
        {
          title: "智慧党建管理",
          children: [
            { authName: "智慧党建数据看板" },
            { authName: "党建动态管理" },
            { authName: "学习园地管理" },
            { authName: "村镇党总支管理" },
            { authName: "党群管理" },
            { authName: "文明动态管理" },
            { authName: "社区课堂管理" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-menu {
  border-right: 0;
}
</style>