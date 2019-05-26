<template>
    <div class="m-popover">
        <div class="m-popover__title">标题</div>
        内容
        <div class="m-popover__arrow"></div>
        <slot></slot>
    </div>
</template>

<script>
import './popover.css';
export default {
    name:"MPopover"
}
</script>

<style>

</style>
