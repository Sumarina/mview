<template>
    <div class="m-slider" ref="slider">
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
    min:{
      type:Number,
      default:0
    },
    max:{
      type:Number,
      default:100
    }
  },
  data() {
    return {
      vertical:false,
      draging: false,
      startX: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: this.defalutValue,
      value:this.defalutValue,
      sliderSize:1
    };
  },
  computed: {
    currentPosition: function() {
      return `${((this.value-this.min) / (this.max-this.min)) * 100}%`;
    },
    barStyle: function() {
      return {
        width: this.currentPosition,
        top: 0
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
      this.startX=event.clientX;
      this.startPosition = parseFloat(this.currentPosition);
      this.newPosition = this.startPosition;      
    },
    onDraging: function(event) {
      if (this.draging) {
        let clientX = event.clientX;
        let diff = (clientX - this.startX)/this.sliderSize*100;
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
    onClickJump: function(event) {},
    setPosition: function(newPostion) {
      if (newPostion < 0) {
        newPostion = 0;
      } else if (newPostion > 100) {
        newPostion = 100;
      }
      let lengthPerSteps = 100 / (100 / this.steps);
      let steps = newPostion / lengthPerSteps;
      let value = steps * lengthPerSteps * 100 * 0.01;
      this.value=value;
      this.oldValue = value;
    },
    resetSliderSize:function(){
      this.sliderSize = this.$refs.slider[`client${ this.vertical ? 'Height' : 'Width' }`];
    }
  },
  mounted(){
    this.resetSliderSize();
    window.addEventListener('resize', this.resetSliderSize);
  },
  beforeDestroy(){
      window.removeEventListener('resize', this.resetSliderSize);
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
