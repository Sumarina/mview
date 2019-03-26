<template>
    <i class="m-icon"
        :class="[
        icon?'m-icon--'+icon:'',
        size?'m-icon--'+size:''
       
        ]"
        
        @click="click"
    >   
        <svg :style="style">
            <use :xlink:href="['#pt-icon--'+icon]"></use>
        </svg>
    </i>
</template>
<script>
import './icon.css';
export default {
    name:'mIcon',
    props:{
        icon:String,
        size:{
            type:String,
            default:'md'
        },
        color:String  // 目前只扩展了个dark
    },
    methods:{
        click:function(){
            this.$emit('click');
        }
    },
    computed:{ 
        style(){
            var css = {};
            if(this.color){
                css.fill = this.color;
            }
            return css;
        }
    }
}
</script>