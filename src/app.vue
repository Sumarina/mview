<template>
  <div id="app">
    <m-switch/>
    <m-table :thead="heads" :data="currentPageData"  :defaultSort=2 />
    <m-pagination :dataLimit=5 :pageOffset="pageOffset" :dataCount="dataCount" :pageNumberLimit=8 :afterSelectPage="selectPage" /> 
  </div>
</template>

<script>
import mSwitch from "./components/switch/Switch.vue";
import mTable from "./components/table/table.vue";
import mPagination from "./components/pagination/pagination.vue";

export default {
  name: "App",
  data() {
    return {
      heads: [
        { value: "Url", sort: false },
        { value: "浏览量", align: "center" },
        "访问次数",
        "test"
      ],
      body: [
        [
          "Homeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "878787878787867686868677",
          "1",
          "test"
        ],
        ["Trends", "1", "17", "test"],
        ["Home1", "2", "29", "test"],
        ["Trends2", "3", "17", "test"],
        ["Home3", "4", "29", "test"],
        ["h", "19", "17", "test"],
        ["Trends4", "5", "17", "test"],
        ["f", "17", "17", "test"],
        ["Home5", "6", "29", "test"],
        ["Trends6", "7", "17", "test"],
        ["Trends7", "8", "17", "test"],
        ["Trends8", "9", "17", "test"],
        ["Trends9", "10", "17", "test"],
        ["a", "11", "17", "test"],
        ["v", "12", "17", "test"],
        ["b", "13", "17", "test"],
        ["c", "14", "17", "test"],
        ["d", "15", "17", "test"],
        ["e", "16", "17", "test"],
        ["g", "18", "17", "test"],
        ["a1", "32", "17", "test"],
        ["b2", "111", "17", "test"],
        ["r", "32", "17", "test"],
        ["j", "322", "17", "test"],
        ["k", "3222", "17", "test"],
        ["l", "32111", "17", "test"]
      ],
      dataLimit: 5,
      pageNumberLimit: 3,
      pageOffset: 1,
      currentPageData:[]
    };
  },
  computed: {
    dataCount() {
      return parseInt(this.body.length / this.dataLimit) + 1;
    }
  },
  mounted:function(){
    this.getPageData();
  },
  components: {
    mSwitch,
    mTable,
    mPagination
  },
  methods: {
    selectPage: function(number) {
      this.pageOffset = number;
      this.getPageData(this.pageOffset);
    },
    getPageData: function(number) {
      let num = 0,
        result = [];
      while (num < this.dataLimit) {
        let row = this.body[num + (this.pageOffset - 1) * this.dataLimit];
        if (row && Array.isArray(row)) {
          result.push(row);
        } else {
          break;
        }
        num++;
      }
      this.currentPageData = result;
      return result;
    }
  }
};
</script>
