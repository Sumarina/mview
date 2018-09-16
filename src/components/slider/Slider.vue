<template>
    <div class="m-slider">
        <span class="m-slider__node" @mousedown="dragNode" :style="{left:left}"></span>
        <div class="m-slider__left" :style="{width:width}"></div>
        <div class="m-slider__background"></div>
    </div>
</template>

<script>
import "./Slider.css";

export default {
    name:"MSlider",
    props:{
        defaultValue:{
            type:Number,
            default:5
        }
    },
    data(){
        return {
            value:this.defaultValue,
            left:'-10px',
            width:'0px'
        }
    },
    methods:{
        dragNode:function(){
            console.log("dragNode",this.value);
            this.left='30px';
            this.width='40px';
        }
    }
}
</script>
