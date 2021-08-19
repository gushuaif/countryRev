<template>
  <div class="party">
    <div class="title">智慧党建</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: "WisdomParty",
  data() {
    return {
      config: {
        data: [
          { name: "党建动态", value: 32192 },
          { name: "学习园地", value: 5150 },
          { name: "党总支", value: 7228 },
          { name: "党群管理", value: 1344 },
          { name: "文明动态", value: 18289 },
          { name: "就业课堂", value: 1457 },
          { name: "文娱队伍", value: 3280 },
          { name: "惆村故事", value: 390 },
          { name: "作品展示", value: 115 },
          { name: "科普天地", value: 115 },
          { name: "乡风文明", value: 983 },
          { name: "查询", value: 103 },
        ],
        sort: false,
      },
    };
  },
};
</script>

<style scoped>
.party {
  width: 25%;
}
.title {
  color: #fff;
  font-weight: 700;
  text-align: center;
}
.dv-scroll-ranking-board {
  width: 100%;
  height: 400px;
}
</style>