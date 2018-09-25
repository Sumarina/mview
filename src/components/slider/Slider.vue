<template>
    <div class="m-slider">
        <div class="m-slider__left" :style="barStyle" @click="onClickJump"></div>
        <div class="m-slider__background" @click="onClickJump"></div>
        <div class="m-slider__wrapper" @mousedown="mousedown"  :style="{left:currentPosition}">
          <div class="m-slider__wrapper--point">
          </div>
        </div>
    </div>
</template>

<script>
import "./Slider.css";
import { setTimeout, clearTimeout } from "timers";

export default {
  name: "MSlider",
  props: {
    defaultValue: {
      type: Number,
      default: 5
    },
    isVertical: {
      //if the slider is vertical
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      draging: false,
      startX: 0,
      currentX: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: this.defaultValue
    };
  },
  computed: {
    max: function() {
      return 100;
    },
    min: function() {
      return 0;
    },
    currentPosition: function() {
      return `${(this.defaultValue - this.min) / (this.max - this.min) * 100}%`;
    },
    barSize: function() {
      return `${(this.defaultValue - this.min) / (this.max - this.min) * 100}%`;
    },
    barStart: function() {
      return `0%`;
    },
    barStyle: function() {
      return {
        width: this.barSize,
        left: this.barStart
      };
    }
  },
  methods: {
    mousedown: function(event) {
      event.preventDefault();
      this.onDragStart(event);
      window.addEventListener("mousemove", this.onDraging);
      window.addEventListener("mouseup", this.onDragEnd);
    },
    onDragStart: function(event) {
      this.draging = true; //start draging
      if (this.isVertical) {
      } else {
        this.startX = event.clientX;
        console.log("startX", this.startX);
      }
      this.startPosition=parseFloat(this.currentPosition);
      this.newPosition=this.startPosition;
    },
    onDraging: function(event) {
      this.currentX = event.clientX;
      console.log(this.startX, this.currentX, this.barSize, this.barStart);
    },
    onDragEnd: function(event) {
      console.log("ondragend");
      window.removeEventListener("mousemove", this.onDraging);
      window.removeEventListener("mouseup", this.onDragEnd);
    },
    onClickJump: function(event) {}
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
