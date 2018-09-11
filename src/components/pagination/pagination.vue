<template>
    <div class="m-paging">
        <!-- <span class="m-paging__total">共{{totalPageNumber}}页</span> -->
        <ul class="m-paging__pager">
            <li class="m-paging__pager--pre" @click="jumpPage(currentPage-1)">前翻页</li>
            <li class="m-paging__pager--number" :class="{active:currentPage===item.value}" v-for="(item,index ) in pageNumberArr" :key="index" @click="jumpPage(item.value)">
                {{item.type==='ellipsis'?'...':item.value}}
            </li>
            <li class="m-paging__pager--next" @click="jumpPage(currentPage+1)">后翻页</li>
        </ul>
        <span class="m-paging__jump">
        前往
        <input class="m-paging__jump--number" type="text" v-model.number="currentPage" @blur="jumpPage(currentPage)">
        页
        </span>
        
    </div>
</template>

<script>
import "./Pagination.css";
import { types } from "util";
export default {
  name: "MPagination",
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    total: Number,
    pageCount: {
      type: Number,
      default: 5
    },
    defaultPage: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      pageNumberArr: [],
      currentPage: this.defaultPage
    };
  },
  computed: {
    pageNumbers() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted: function() {
    this.pageNumberArr = this.computePageNumberArr();
  },
  methods: {
    jumpPage: function(index) {},
    computePageNumberArr: function() {
      let arr = [],
        element = {
          index: 1, //下标
          value: 1, //数值
          type: "number" //type number or ellipsis
        },
        _currentPage = this.currentPage;

      const LASTPAGE = this.pageNumbers; //last number
      const PAGECOUNT = this.pageCount; // the count is that show pagenumbers

      if (LASTPAGE <= PAGECOUNT) {
        //if last pagenum < pagecount
        for (let i = 1; i <= LASTPAGE; i++) {
          arr.push({
            index: i,
            value: i,
            type: "number"
          });
        }
      } else if (
        _currentPage === 1 ||
        _currentPage - 1 === 1 ||
        _currentPage === LASTPAGE ||
        _currentPage + 1 === LASTPAGE
      ) {
        if (_currentPage === 1 || _currentPage - 1 === 1) {
          for (let i = 1; i <= PAGECOUNT; i++) {
            let type = "number";
            if (i === PAGECOUNT) {
              type = "ellipsis";
            }
            arr.push({
              index: i,
              value: i,
              type: type
            });
          }
          arr.push({
            index: PAGECOUNT + 1,
            value: LASTPAGE,
            type: "number"
          });
        } else if (_currentPage === LASTPAGE || _currentPage + 1 === LASTPAGE) {
          arr.push({
            index: 1,
            value: 1,
            type: "number"
          });
          arr.push({
            index: 2,
            value: 2,
            type: "ellipsis"
          });

          for (let i = PAGECOUNT - 2; i >= 0; i--) {
            let type = "number";
            arr.push({
              index: i,
              value: LASTPAGE - i,
              type: type
            });
          }
        }
      } else {
        arr.push({
          index: 0,
          value: 1,
          type: "number"
        });
        arr.push({
          index: 1,
          value: 2,
          type: "ellipsis"
        });
        let flag = false;
        for (let i = 0; i < PAGECOUNT - 1; i++) {
          let type = "number";
          let value = _currentPage + i;

          if (value - 1 === LASTPAGE || value === LASTPAGE) {
            flag = true;
            break;
          } else if (i + 1 === PAGECOUNT - 1) {
            type = "ellipsis";
          }
          arr.push({
            index: i + 2,
            value: value,
            type: type
          });
        }
        arr.push({
          index: PAGECOUNT + 1,
          value: LASTPAGE,
          type: "number"
        });
      }

      return arr;
    }
  },
  watch: {
    currentPage: function() {
      this.pageNumberArr = this.computePageNumberArr();
    }
  }
};
</script>

