<template>
    <div class="bulletcharts">
        <p @click="changeColor">我在bulletcharts组件</p>
        <div class="rect"></div>
    </div>
</template>
<script>
import * as d3 from "d3";
import "./bulletcharts.scss";
export default {
  name: "ptBulletChart",
  props: ["value"],
  data() {
    return {
      model: this.value
    };
  },
  methods: {
    changeColor: function() {
      console.log(this.model);
      d3.selectAll(".bulletcharts p").style("color", "red");
    },
    changeValue: function() {
      this.model += 1;
      this.$emit("counter-click", this.model);
    },
    showChart: function() {
      // var sankey = d3.sankey();
    }
  }
};
</script>

