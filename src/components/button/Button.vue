<template>
    <button class="m-button"  @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
import './Button.css';
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    plain:Boolean,
    disabled:Boolean,
    round:Boolean
  },
  methods:{
      handleClick(event){
          console.log(event);
          this.$emit('click',event);
      }
  }
};
</script>


