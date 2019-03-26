<template>
    <div class="m-row"
        :gutter="gutter"
        :type="type"
        :justify="justify"
        :class="[
        type?'m-row--'+type :'',
        justify?'is-justify-'+justify :'' 
        ]"
        :style="style">
        <slot></slot>
    </div>
</template>
<script>
import './row.css';
export default {
    name:'mRow',
    props:{
        gutter:Number,
        // style:String
        type:String,
        justify:String
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