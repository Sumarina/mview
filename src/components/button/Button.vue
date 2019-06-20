<template>
  <button :class="['m-button__'+type,'m-button',customeClass]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import "./Button.css";
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean,
    customeClass:{
      type:String,
      default:""
    }

  },
  data() {
    return {
      
    };
  },
  mounted() {},
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>


