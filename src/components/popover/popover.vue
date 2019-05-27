<template>
  <div class="m-popover">
    <div v-show="isShow" class="m-popover__content">
      <div class="m-popover__title">{{title}}</div>
      <slot>{{content}}</slot>
      <div class="m-popover__arrow"></div>
    </div>

    <slot name="reference"></slot>
  </div>
</template>

<script>
import "./popover.css";
import { setTimeout } from "timers";
export default {
  name: "MPopover",
  props: {
    trigger: String,
    title: String,
    content: String
  },
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    var _this = this;
    let reference = this.$slots.reference[0];
    if (_this.trigger === "hover") {
      reference.elm.addEventListener("mouseenter", _this.handleMouseEnter);
      reference.elm.addEventListener("mouseleave", _this.handleMouseLeave);
    } else {
      reference.elm.addEventListener("click", _this.handleClick);
    }
  },
  methods: {
    handleMouseEnter() {
      setTimeout(() => {
        this.isShow = true;
      });
    },
    handleMouseLeave() {
      setTimeout(() => {
        this.isShow = false;
      });
    },
    handleClick() {
      setTimeout(() => {
        this.isShow = !this.isShow;
      });
    }
  }
};
</script>

<style>
</style>
