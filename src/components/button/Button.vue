<template>
    <button  @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
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

<style lang="postcss" scoped>
    @b m-button{
        
    }
</style>


