<template>
    <div class="m-paging">
        <span class="m-paging__total">共{{totalPageNumber}}页</span>
        <ul class="m-paging__pager">
            <li class="m-paging__pager--pre" @click="selectPage(currentPageNumber-1)">前翻页</li>
            <li class="m-paging__pager--number" @click="selectPage(number)" :class="{active:currentPageNumber===number}" v-for="number in pageNumber">
                {{number}}
            </li>
            <li class="m-paging__pager--next" @click="selectPage(currentPageNumber+1)">后翻页</li>
        </ul>
        <span class="m-paging__jump">
        前往
        <input class="m-paging__jump--number" type="text" v-model.number="jumpNumber" @blur="selectPage(jumpNumber)">
        页
        </span>
        
    </div>
</template>

<script>
import "./Pagination.css";
export default {
  name: "MPagination",
  props: {
    dataCount: Number,
    //设置每页显示最大多少条数据
    dataLimit: {
      type: Number,
      default: 10
    },
    //是否显示分页操作区域 默认显示
    showPaging: {
      type: Boolean,
      default: true
    },
    //设置分页从第几页开始展示
    pageOffset: {
      type: Number,
      default: 1
    },
    //显示当前的分页按钮的数量 默认为5
    pageNumberLimit: {
      type: Number,
      default: 5
    },
    //选择分页后的回调事件 params=pageNumber
    afterSelectPage: Function
  },
  data() {
    return {
      currentPageNumber: this.pageOffset,
      totalPageNumber: this.dataCount,
      jumpNumber:1
    };
  },
  computed: {
    pageNumber() {
      return this.dataCount < this.pageNumberLimit
        ? this.dataCount
        : this.pageNumberLimit;
    }
  },
  methods: {
    selectPage: function(index) {
      if (index <= this.dataCount && index >= 1) {
        this.currentPageNumber = index;
        this.afterSelectPage(index);
      }
    }
  }
};
</script>

