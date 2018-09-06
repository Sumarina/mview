<template>
    <div class="m-paging">
        <!-- <span class="m-paging__total">共{{totalPageNumber}}页</span> -->
        <ul class="m-paging__pager">
            <li class="m-paging__pager--pre" @click="jumpPage(currentPage-1)">前翻页</li>
            <li class="m-paging__pager--number" :class="{active:currentPage===item.currentValue}" v-for="(item,index ) in pageNumberArr" :key="index" @click="jumpPage(item.currentValue)">
                {{item.type==="direction"?"...":item.currentValue}}
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
    currentPageNumber: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      pageNumberArr: [],
      currentPage: this.currentPageNumber
    };
  },
  computed: {
    pageNumbers() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted: function() {
    this.pageNumberArr = this.computePageCount();
  },
  methods: {
    jumpPage: function(index) {
      console.log("index", index);
      var dataArr = processJumpData(this.pageNumberArr);
      var _index = dataArr.indexOf(this.currentPage) + 1;
      var _count = dataArr.length - _index - 1;
      if (index === "-1") {
        this.currentPage = dataArr[1] - _count;
      } else if (index === "-2") {
        this.currentPage = dataArr[dataArr.length - 2] + _count;
      } else {
        this.currentPage = index;
      }
    },
    computePageCount: function() {
      var arr = [];
      var middleValue = Math.ceil(this.pageCount / 2);
      var lastPageNumber = this.pageNumbers;
      var _currentPage = this.currentPage;
      var _pageCount = this.pageCount;

      if (_currentPage > middleValue) {
        arr[0] = {
          currentValue: 1,
          currentIndex: 0,
          type: "number"
        };
        arr[1] = {
          currentValue: 2,
          currentIndex: 1,
          type: "direction"
        };

        if (lastPageNumber - (_currentPage + _pageCount - 3) <= 1) {
          var preNumberCount = _pageCount - 2 - (lastPageNumber - _currentPage);
          for (let i = preNumberCount; i >= 1; i--) {
            // arr[arr.length] = _currentPage - i;
            let obj = {
              currentValue: _currentPage - i,
              currentIndex: arr.length,
              type: "number"
            };
            arr.push(obj);
          }
          for (let i = _currentPage; i < lastPageNumber; i++) {
            // arr[arr.length] = i;
            let obj = {
              currentValue: i,
              currentIndex: arr.length,
              type: "number"
            };
            arr.push(obj);
          }
        } else {
          for (let i = 0; i < _pageCount - 2; i++) {
            // arr[arr.length] = _currentPage + i;
            let obj = {
              currentValue: _currentPage + i,
              currentIndex: arr.length,
              type: "number"
            };
            arr.push(obj);
          }
          // arr[arr.length] = "-2";
          var temp=arr[arr.length]+1;
          arr[arr.length] = {
            currentValue: temp,
            currentIndex: arr.length,
            type: "direction"
          };
        }
        
        arr[arr.length] = {
          currentValue: lastPageNumber,
          currentIndex: arr.length,
          type: "number"
        };
      } else {
        //first pagenumber
        if (lastPageNumber <= _pageCount) {
          for (let i = 0; i < lastPageNumber; i++) {
            let obj = {
              currentValue: i + 1,
              currentIndex: i + 1,
              type: "number"
            };
            arr.push(obj);
          }
        } else {
          //always from the first pagenumber start to compute...
          for (let i = 0; i < _pageCount - 1; i++) {
            let obj = {
              currentValue: i + 1,
              currentIndex: i + 1,
              type: "number"
            };
            arr.push(obj);
          }
          arr[arr.length] = {
            currentValue: _pageCount,
            currentIndex: arr.length,
            type: "direction"
          };
          arr[arr.length] = {
            currentValue: lastPageNumber,
            currentIndex: arr.length,
            type: "number"
          };
        }
      }
      console.log(arr);
      return arr;
    }
  },
  watch: {
    currentPage: function() {
      this.pageNumberArr = this.computePageCount();
    }
  }
};

function processJumpData(arr) {
  var result = arr.filter(function(value, index, arr) {
    if (Number.isInteger(value)) {
      return value;
    }
  });
  return result;
}
</script>

