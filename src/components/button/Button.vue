<template>
    <button  
      class='m-button'
      :type='type'
      :disabled='disabled'
      :size = 'size'
      :class="[
        type?'m-button--'+type:'',
        size?'m-button--'+type:'',
        {'isDisabled':disabled},
        {'is-plain':plain},
        {'is-round':round},
        {'is-circle':circle}
      ]"
      @click="handleClick">
      <i v-if='icon' class="m-button__icon" :class="['m-icon'+icon]">
        <svg>
          <use :xlink:href="['#m-icon--' + icon]"></use>
        </svg>
      </i>
      <slot></slot>
    </button>
</template>

<script>
import './button.css';
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled:{
      type:Boolean,
      default:false
    },
    size:String,
    icon:String,
    round:Boolean,
    plain:Boolean,
    circle:Boolean
  },
  methods:{
      handleClick(event){
          console.log(event);
          this.$emit('click',event);
      }
  }
};
</script>

