<template>
    <i class="m-icon"
        :class="[
        icon?'m-icon--'+icon:'',
        size?'m-icon--'+size:'',
        color?'m-icon--'+color:''
        ]"
        
        @click="click"
    >   
        <svg>
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
        color:String
    },
    methods:{
        click:function(){
            this.$emit('click');
        }
    }
}
</script>