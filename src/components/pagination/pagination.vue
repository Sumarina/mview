<template>
    <div class="m-paging">
        <!-- <span class="m-paging__total">共{{totalPageNumber}}页</span> -->
        <ul class="m-paging__pager">
            <!-- <li class="m-paging__pager--pre" @click="jumpPage(currentPage-1)">前翻页</li> -->
            <li class="m-paging__pager--number" :class="{active:currentPage===item.value}" v-for="(item,index ) in pageNumberArr" :key="index" @click="onPageTurn(item)">
                {{item.type==='ellipsis'?'...':item.value}}
            </li>
            <!-- <li class="m-paging__pager--next" @click="jumpPage(currentPage+1)">后翻页</li> -->
        </ul>
        <span class="m-paging__jump">
        前往
        <input class="m-paging__jump--number" type="text" v-model.number="currentPage" @input="jumpPage(currentPage)">
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
      default: 7
    },
    defaultPage: {
      type: Number,
      default: 60
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
    jumpPage: function(value) {
      this.currentPage = value;
      this.pageNumberArr = this.computePageNumberArr();
    },
    onPageTurn: function(item) {
      let _value = item["value"];
      let _type = item["type"]; 
      /**
       * the item of current click ,it's an object that own three custom property.
       * if the property type of this item is 'ellispsi', means this item is ellipsis.we need to get a new pageNumberArr.
       * if the property type is 'number',means this item is number,it's needn't to get pageNumberArr.
       */
      if (_type === "number") {
        this.currentPage = item["value"];
      } else {
        if (_value < this.currentPage) {
          this.currentPage =
            this.currentPage - Math.ceil(this.pageCount / 2) - 1;
        } else {
          this.currentPage =
            this.currentPage + Math.ceil(this.pageCount / 2) + 1;
        }
        this.pageNumberArr = this.computePageNumberArr();
      }
    },
    computePageNumberArr: function() {
      let arr = [],
        element = {
          index: 1, //下标
          value: 1, //数值
          type: "number" //type number or ellipsis
        },
        _currentPage = this.currentPage;//current page number

      const LASTPAGENUM = this.pageNumbers; //last number
      const PAGECOUNT = this.pageCount; // the count is that show pagenumbers

      /**
       * first,if last pagenumber less than pagecount ,it's means we have no need to ellipsis.
       * second,if current page less than pagecount or more than last pagenumber minus pagecount ,it's means we only one ellipsis
       * finally,we need two ellipsis.
       */
      if (LASTPAGENUM <= PAGECOUNT) {
        //if last pagenum < pagecount
        for (let i = 1; i <= LASTPAGENUM; i++) {
          arr.push({
            index: i,
            value: i,
            type: "number"
          });
        }
      } else if (_currentPage <= PAGECOUNT - 1) {
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
          value: LASTPAGENUM,
          type: "number"
        });
      } else if (_currentPage > LASTPAGENUM - PAGECOUNT) {
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
            value: LASTPAGENUM - i,
            type: type
          });
        }
      } else {
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

        let middleIndex = Math.ceil((PAGECOUNT - 2) / 2);

        for (let i = middleIndex; i >= 1; i--) {
          arr.push({
            index: 2 + i,
            value: _currentPage - i + 1,
            type: "number"
          });
        }
        for (let i = 1; i <= PAGECOUNT - 2 - middleIndex; i++) {
          arr.push({
            index: 2 + middleIndex + i,
            value: _currentPage + i,
            type: "number"
          });
        }

        arr.push({
          index: PAGECOUNT + 1,
          value: LASTPAGENUM - 1,
          type: "ellipsis"
        });
        arr.push({
          index: PAGECOUNT + 2,
          value: LASTPAGENUM,
          type: "number"
        });
      }
      return arr;
    }
  }
};
</script>

