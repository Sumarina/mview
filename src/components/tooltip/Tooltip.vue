<template>
    <div class="m-tooltip" :class="isActive">
        <span class="m-tooltip__top m-tooltip__top--left">
            progress
        </span>
    </div>
</template>

<script>
import './Tooltip.css';

export default {
    name:"MTooltip",
    props:{
        isHover:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            
        }
    },
    computed:{
        isActive:function(){
            return !!this.isHover?'show':'hide';
        }
    } 
}
</script>

<style>

</style>
