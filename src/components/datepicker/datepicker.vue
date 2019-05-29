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
      month: new Date().getMonth() + 1,
      panelData: []
    };
  },
  computed: {
    currentFullYearMonth() {
      return DATE.getFullYear() + "年" + (DATE.getMonth() + 1) + "月";
    },
    date() {
      return getFullDate(DATE);
    }
  },
  mounted() {
    this.panelData = [...this.computedCurrentMonthDatas(DATE)];
  },
  methods: {
    clearInput() {
      this.date = "";
      console.log("clearInput...");
      this.computedCurrentMonthDatas(DATE);
    },
    computedCurrentMonthDatas(date) {
      const currentDate = date;
      const currentMonth = currentDate.getMonth() + 1;
      /**几号 */
      const day = currentDate.getDate();
      /**计算周几 */
      const currentDays = currentDate.getDay();
      /**计算当月的天数 */
      const currentMonthDays = getMonthDays(currentMonth);
      const lastMonthDays = getMonthDays(currentMonth - 1);
      var datas = [];
      for (let i = 0; i < 7; i++) {
        /**一周7天 */
        let days = [];
        if (i == currentDays) {
          let firstDay = 1;
          for (let j = 0; j < 6; j++) {
            /**一个面板6行 */
            days.push(firstDay);
            firstDay = firstDay + 7;
            if (firstDay >= currentMonthDays) {
              firstDay = firstDay - currentMonthDays;
            }
          }
        } else if (i < currentDays) {
          let lastDay = lastMonthDays - (currentDays - i - 1);
          for (let j = 0; j < 6; j++) {
            /**一个面板6行 */
            days.push(lastDay);
            lastDay = lastDay + 7;
            if (j == 0 && lastDay > lastMonthDays) {
              lastDay = lastDay - lastMonthDays;
            } else if (j != 0 && lastDay > currentMonthDays) {
              lastDay = lastDay - currentMonthDays;
            }
          }
        } else {
          let firstDay = 1 + i - currentDays;
          for (let j = 0; j < 6; j++) {
            /**一个面板6行 */
            days.push(firstDay);
            firstDay = firstDay + 7;
            if (firstDay > currentMonthDays) {
              firstDay = firstDay - currentMonthDays;
            }
          }
        }
        datas.push({
          week: getWeekTxt(i),
          day: days
        });
      }
      
      return datas;
    }
  }
};
function getWeekTxt(week) {
  switch (week) {
    case 0:
      return "sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
  }
}
function getFullDate(date) {
  if (Object.prototype.toString.call(date).indexOf("Date") == -1) {
    date = new Date();
  }
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

function getMonthDays(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2: {
      const year = new Date().getFullYear();
      if (!year % 4 && year % 100) {
        return 29;
      } else return 28;
    }
  }
}
</script>

<style>
</style>
