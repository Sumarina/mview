<template>
  <div class="m-datepicker">
    <div class="m-datepicker__input">
      <input type="text" class="m-datepicker__input--open" placeholder="选择日期">
      <font-awesome-icon class="m-datepicker__icon calendar" icon="calendar-alt"></font-awesome-icon>
      <font-awesome-icon class="m-datepicker__icon times" icon="times-circle"></font-awesome-icon>
    </div>
    <div class="m-datepicker__panel">
      <div class="m-datepicker__header">
          <div>
              {{currentFullYearMonth}}
          </div>
        <font-awesome-icon class="m-datepicker__icon angle-double-left" icon="angle-double-left"></font-awesome-icon>
        <font-awesome-icon class="m-datepicker__icon angle-left" icon="angle-left"></font-awesome-icon>
        <font-awesome-icon class="m-datepicker__icon angle-right" icon="angle-right"></font-awesome-icon>
        <font-awesome-icon class="m-datepicker__icon angle-double-right" icon="angle-double-right"></font-awesome-icon>

      </div>
      <div class="m-datepicker__content"></div>
      <div class="m-datepicker__arrow"></div>
    </div>
  </div>
</template>

<script>
import "./datepicker.css";
export default {
  name: "MDatepicker",
  data(){
      return {
          currentFullYearMonth:"2019年8月"
      }
  }
};
</script>

<style>
</style>
