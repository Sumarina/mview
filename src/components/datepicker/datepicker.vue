<template>
  <div class="m-datepicker">
    <m-popover trigger="click" title>
      <div class="m-datepicker__panel">
        <div class="m-datepicker__header">
          <div>{{currentFullYearMonth}}</div>
          <font-awesome-icon class="m-datepicker__icon angle-double-left" icon="angle-double-left"></font-awesome-icon>
          <font-awesome-icon class="m-datepicker__icon angle-left" icon="angle-left"></font-awesome-icon>
          <font-awesome-icon class="m-datepicker__icon angle-right" icon="angle-right"></font-awesome-icon>
          <font-awesome-icon
            class="m-datepicker__icon angle-double-right"
            icon="angle-double-right"
          ></font-awesome-icon>
        </div>
        <div class="m-datepicker__content">
          <div class="m-datepicker__month" :key="index" v-for="(i,index) in panelData">
            <div class="m-datepicker__week">{{i.week}}</div>
            <div class="m-datepicker__day" :key="d" v-for="d in i.day">{{d}}</div>
          </div>
        </div>
        <!-- <div class="m-datepicker__arrow"></div> -->
      </div>
      <div slot="reference" class="m-datepicker__input">
        <input type="text" v-model="date" class="m-datepicker__input--open" placeholder="选择日期">
        <font-awesome-icon class="m-datepicker__icon calendar" icon="calendar-alt"></font-awesome-icon>
        <font-awesome-icon
          @click.stop="clearInput"
          class="m-datepicker__icon times"
          icon="times-circle"
        ></font-awesome-icon>
      </div>
    </m-popover>
  </div>
</template>

<script>
const DATE = new Date();

import "./datepicker.css";
export default {
  name: "MDatepicker",
  data() {
    return {
      date: "2019-05-27",
      month: new Date().getMonth() + 1
    };
  },
  computed: {
    currentFullYearMonth() {
      return DATE.getFullYear() + "年" + (DATE.getMonth() + 1) + "月";
    },
    panelData() {
      return [
        { week: "sunday", day: [1, 2, 3, 4, 5] },
        { week: "monday", day: [1, 2, 3, 4, 5] },
        { week: "tuesday", day: [1, 2, 3, 4, 5] },
        { week: "wednesday", day: [1, 2, 3, 4, 5] },
        { week: "thursday", day: [1, 2, 3, 4, 5] },
        { week: "friday", day: [1, 2, 3, 4, 5] },
        { week: "saturday", day: [1, 2, 3, 4, 5] }
      ];
    }
  },
  methods: {
    clearInput() {
      this.date = "";
      console.log("clearInput...");
      this.computedCurrentMonthDatas();
    },
    computedCurrentMonthDatas() {
      const currentDays=DATE.getDay();
      const totalDay=DATE.getDate();
      console.log(currentDays,totalDay);
    }
  }
};
</script>

<style>
</style>
