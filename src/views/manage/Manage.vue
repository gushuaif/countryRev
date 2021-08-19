<template>
  <div class="manage">
    <head-top></head-top>
    <menu-list />
  </div>
</template>

<script>
import HeadTop from "@/components/common/headtop/HeadTop";
import MenuList from "../menu/MenuList.vue";

export default {
  components: { HeadTop, MenuList },
  name: "Manage",
};
</script>

<style>
</style>