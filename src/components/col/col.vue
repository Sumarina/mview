<template>
    <div class="m-col"
        :span="span"
        :class="[
            span?'m-col-'+span:''
        ]"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'mCol',
    props:{
        span:Number
    }
}
</script>