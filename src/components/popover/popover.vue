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
    reference.elm.addEventListener("mouseenter", _this.MouseEnter);
    reference.elm.addEventListener("mouseleave", _this.MouseLeave);
  },
  methods: {
    MouseEnter() {
      setTimeout(() => {
        this.isShow = true;
      });
    },
    MouseLeave() {
      setTimeout(() => {
        this.isShow = false;
      });
    }
  }
};
</script>

<style>
</style>
