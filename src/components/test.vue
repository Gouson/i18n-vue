<template>
  <div class="unit">
    <div class="level">{{level}}</div>
    <div class="raphael" ref="rapheal"></div>
  </div>
</template>

<script>
import Raphael from "raphael";
import _ from "lodash";
export default {
  components: {},
  props: {
    level: String,
    dataArray: Array
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    draw() {
      let a = this.dataArray;
      let rapheal = this.$refs.rapheal;
      let maxValue = _.max(a);
      let minValue = _.min(a);
      let diffValue = maxValue - minValue;
      let totalHeight = rapheal.offsetHeight;
      let width1 = rapheal.clientWidth / a.length;
      var paper = Raphael(rapheal, rapheal.clientWidth, totalHeight);
      for (let i = 0; i < a.length; i++) {
        let currentX = width1 * (i + 0.5);
        let currentY = ((maxValue - a[i]) / diffValue) * totalHeight;
        paper.text(currentX, currentY, a[i]);
        if (!(i === 0)) {
          paper.path(`M${x} ${y}L${currentX} ${currentY}`);
        }
        //存储当前点的位置
        let x = currentX;
        let y = currentY;
      }
      // //画路径 从10.10 移动到90.90
      // var path = paper.path("M40 10L50 7");
      // var path1 = paper.path("M50 7L60 16");
      // //写字
      // var t = paper.text(50, 30, "30摄氏度");
      // t.attr("font-size", "5px");
    }
  },
  created() {},
  mounted() {
    this.draw();
  }
};
</script>
<style scoped lang="less">
* {
}
.unit {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 30px;
  margin: 5px;
  .level {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .raphael {
   flex:1;
    height: 30px;
  }
}
</style>