<template>
    <div class="m-slider">
        <span class="m-slider__node" @mousedown="mousedown"  :style="{left:left+'px'}"></span>
        <div class="m-slider__left" :style="{width:width}" @click="onClickJump"></div>
        <div class="m-slider__background" @click="onClickJump"></div>
    </div>
</template>

<script>
import "./Slider.css";
import { setTimeout } from 'timers';

export default {
  name: "MSlider",
  props: {
    defaultValue: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      value: this.defaultValue,
      left: -10,
      width: "0%"
    };
  },
  methods: {
    mousedown: function(event) {
      let left=event["target"]["offsetLeft"];
      this.left = Number(left)+30;
      // console.log(this.left);
      // // console.log("dragNode", event["target"]["offsetLeft"]);
      this.width = this.left + 10 + "px";
    },
    onClickJump:function(event){
      this.left = event["offsetX"]-10;
      this.width = this.left + 10 + "px";
    }
  }
};


</script>
