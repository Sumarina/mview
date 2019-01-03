<template>
    <div class="m-notice">
        <div class="m-notice__wrap">
            <div class="m-notice__wrap--title">
                <font-awesome-icon  icon="check-circle" class="success"></font-awesome-icon>
                成功
            </div>
            <div class="m-notice__wrap--content">
                这是一条成功的消息
            </div>
            <div class="m-notice__wrap--close" @click="close">
                <font-awesome-icon  icon="times" class="close"></font-awesome-icon>
            </div>
        </div>
        <div class="m-notice__wrap">
            <div class="m-notice__wrap--title">
                <font-awesome-icon  icon="exclamation-circle" class="regular"></font-awesome-icon>
                消息
            </div>
            <div class="m-notice__wrap--content">
                这是一条提示的消息
            </div>
            <div class="m-notice__wrap--close" @click="close">
                <font-awesome-icon  icon="times" class="close"></font-awesome-icon>
            </div>
        </div>
        <div class="m-notice__wrap">
            <div class="m-notice__wrap--title">
                <font-awesome-icon  icon="times-circle" class="error"></font-awesome-icon>
                错误
            </div>
            <div class="m-notice__wrap--content">
                这是一条错误的消息
            </div>
            <div class="m-notice__wrap--close" @click="close">
                <font-awesome-icon  icon="times" class="close"></font-awesome-icon>
            </div>
        </div>
        <div class="m-notice__wrap">
            <div class="m-notice__wrap--title">
                <font-awesome-icon  icon="exclamation-circle" class="warning"></font-awesome-icon>
                警告
            </div>
            <div class="m-notice__wrap--content">
                这是一条警告的消息
            </div>
            <div class="m-notice__wrap--close" @click="close">
                <font-awesome-icon  icon="times" class="close"></font-awesome-icon>
            </div>
        </div>
    </div>
</template>

<script>
import "./notification.css";

export default {
  name: "MNotification",
  props: {
    tipsType: {
      default: "success",
      type: String
    },
    tipsTitle: {
      default: "成功",
      type: String
    },
    tipsContent: {
      default: "操作成功",
      type: String
    },
    isAutoClose: {
      default: true,
      type: Boolean
    },
    position: {
      default: "top",
      type: String
    }
  },
  methods: {
    close: function() {
      console.log(this.$el.getBoundingClientRect());
    }
  }
};
</script>

<style>
</style>
