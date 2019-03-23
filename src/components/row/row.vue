<template>
    <div class="m-row"
        :gutter="gutter"
        :style="style"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'mRow',
    props:{
        gutter:Number,
        computedStyle:String
    },
    computed: {
        style(){
            var css = {};
            if(this.gutter){
                css.marginLeft = '-'+this.gutter/2+"px";
                css.marginRight = css.marginLeft;
            }
            return css;
        }
    }
}
</script>