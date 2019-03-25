<template>
    <div class="m-col"
        :span="span"
        :class="[
            span?'m-col-'+span:''
        ]"
        :style="style"
    >
        <slot></slot>
    </div>
</template>
<script>
import './col.css';
export default {
    name:'mCol',
    props:{
        span:Number
    },
    computed:{
        style(){
            var css={};
            if(this.$parent.gutter){
                css.paddingLeft = this.$parent.gutter/2 + "px";
                css.paddingRight = css.paddingLeft;
            }
            return css;
        }
    }
}
</script>
