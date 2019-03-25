<template>
    <div class="m-progress">
        <div class="m-progress-bar" v-if="isBar">
            <div class="m-progress-bar__outer" :style="barHeight">
                <div class="m-progress-bar__inner" :style="barStyle">
                    <div class="m-progress-text m-progress-bar__inner--text" v-if="textInside">{{width}}</div>
                </div>
            </div> 
        </div>
        <div class="m-progress-text" v-if="!textInside">{{width}}</div>

        <div class="m-progress-circle" v-if="!isBar">
             <canvas id="circle" width="160" height="160" class="m-progress-circle__canvas"></canvas>
             <div class="m-progress-circle__text">{{width}}</div>
        </div>
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
        },
        textInside:{
            default:false,
            type:Boolean
        },
        isBar:{
            default:true,
            type:Boolean
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
    },
    mounted:function(){
        !this.isBar&&this.drawCircleProcess(this.percent);
    },
    methods:{
        drawCircleProcess:function(process){
            var c=document.getElementById("circle");
            var context = c.getContext('2d');
            var cWidth = c.width;
            var cHeight = c.height;
            
            var circleX=cWidth/2;
            var circleY=cHeight/2;
            var circleR=circleX-5;
            context.clearRect(0,0,cWidth,cHeight);

            context.beginPath();
            context.moveTo(circleX,circleY);
            context.arc(circleX,circleY,circleR,0,Math.PI*2,false);
            context.closePath();
            context.fillStyle="#e5e5e5";
            context.fill();

            context.beginPath();
            context.moveTo(circleX,circleY);
            context.arc(circleX,circleY,circleR,-Math.PI/2,Math.PI*(2*(process/100)-0.5),false);
            context.closePath();
            context.fillStyle="#b2cf07";
            context.fill();

            context.beginPath();
            context.moveTo(circleX,circleY);
            context.arc(circleX,circleY,circleR-5,0,Math.PI*2,true);
            context.closePath();
            context.fillStyle="#ffffff";
            context.fill();

        },
    },
    watch:{
        percent:function(newval,oldval){
            !this.isBar&&this.drawCircleProcess(newval);
        }
    }
}
</script>

<style>

</style>
