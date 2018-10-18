<template>
    <div class="m-slider" ref="slider">
        <div class="m-slider__left" :style="barStyle" @click="onClickJump"></div>
        <div class="m-slider__background" @click="onClickJump"></div>
        <div class="m-slider__wrapper" @mouseover="mouseover" @mouseout="mouseout" @mousedown="mousedown"  :style="{left:currentPosition}">
          <div class="m-slider__wrapper--point">
          </div>
          <m-tooltip :value="value" :isHover="isHover"></m-tooltip>
        </div>
    </div>
</template>

<script>
import "./Slider.css";
import { setTimeout, clearTimeout } from "timers";

export default {
  name: "MSlider",
  props: {
    defalutValue: {
      type: Number,
      default: 0
    },
    isVertical: {
      //if the slider is vertical
      type: Boolean,
      default: false
    },
    steps: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      vertical: false,
      draging: false,
      startX: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: this.defalutValue,
      value: this.defalutValue,
      sliderSize: 1,
      isHover:false
    };
  },
  computed: {
    currentPosition: function() {
      return `${((this.value - this.min) / (this.max - this.min)) * 100}%`;
    },
    barStyle: function() {
      return {
        width: this.currentPosition,
        top: 0
      };
    }
  },
  methods: {
    mouseover:function(){
      this.isHover=true;
    },
    mouseout:function(){
      this.isHover=false;
    },
    mousedown: function(event) {
      event.preventDefault();
      this.onDragStart(event);
      //register event
      window.addEventListener("mousemove", this.onDraging);
      window.addEventListener("mouseup", this.onDragEnd);
    },
    onDragStart: function(event) {
      this.draging = true; //start draging
      this.startX = event.clientX; //get start clientX
      this.startPosition = parseFloat(this.currentPosition);//convert the string to number
      this.newPosition = this.startPosition;
    },
    onDraging: function(event) {
      if (this.draging) {
        let clientX = event.clientX;
        //compute the diff of draging.
        let diff = ((clientX - this.startX) / this.sliderSize) * 100;
        this.resetSliderSize();
        this.newPosition = this.startPosition + diff;
        this.setPosition(this.newPosition);
      }
    },
    onDragEnd: function(event) {
      this.draging = false;
      window.removeEventListener("mousemove", this.onDraging);
      window.removeEventListener("mouseup", this.onDragEnd);
    },
    onClickJump: function(event) {
      let offsetLeft = this.$refs.slider.getBoundingClientRect().left;
      this.setPosition(((event.clientX - offsetLeft) / this.sliderSize) * 100);
    },
    setPosition: function(newPostion) {
      if (newPostion < 0) {
        newPostion = 0;
      } else if (newPostion > 100) {
        newPostion = 100;
      }
      //compute the length of one step.
      let lengthPerSteps = 100 / ((this.max - this.min) / this.steps);
      //the counts of step
      let steps = newPostion / lengthPerSteps;
      //get value,means current position
      let value =
        steps * lengthPerSteps * (this.max - this.min) * 0.01 + this.min;
      this.value = parseInt(value.toFixed(0));
      this.oldValue = this.value;
    },
    resetSliderSize: function() {
      this.sliderSize = this.$refs.slider[
        `client${this.vertical ? "Height" : "Width"}`
      ];
    }
  },
  mounted() {
    this.resetSliderSize();
    window.addEventListener("resize", this.resetSliderSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resetSliderSize);
  }
};
/**
 *
 */
function _debounce(fn, wait = 50, immediate = true) {
  let timer, ctx, args;
  let later = function() {
    setTimeout(function() {
      timer = null;
      if (!immediate) {
        fn.apply(ctx, args);
        ctx = args = null;
      }
    }, wait);
  };
  return function(...params) {
    if (!timer) {
      timer = later();
      if (immediate) {
        fn.apply(this, params);
      } else {
        ctx = this;
        args = params;
      }
    } else {
      clearTimeout(timer);
      timer = later();
    }
  };
}

function _throttle() {}
</script>
