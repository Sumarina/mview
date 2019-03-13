<template>
    <div class="m-progress">
        <div class="m-progress-bar">
            <div class="m-progress-bar__outer" :style="barHeight">
                <div class="m-progress-bar__inner" :style="barStyle"></div>
            </div> 
        </div>
        <div class="m-progress-text">{{width}}</div>
    </div>
</template>

<script>
import './progress.css';
export default {
    name:'MProgress', 
    props:{
        percent:{
            default:0,
            type:Number
        },
        strokeWidth:{
            default:8,
            type:Number
        }
    },
    computed:{
        width:function(){
            return `${this.percent}%`
        },
        barStyle:function(){
            return {
                'width':this.width,
                'height':`${this.strokeWidth}px`,
                'border-radius':`${this.strokeWidth/2}px`,
            }
        },
        barHeight:function(){
            return {
                'height':`${this.strokeWidth}px`,
                'border-radius':`${this.strokeWidth/2}px`,
            }
        }
    }
}
</script>

<style>

</style>
