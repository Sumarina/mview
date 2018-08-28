<template>
    <div class="m-table">
        <div class="m-table__wrap">
            <div class="m-table__column" v-for="(column,columnIndex) in table" :class="grow-1===columnIndex ?'grow':'shrink'">
            <div v-for="(element,index) in column" :class="{'first':columnIndex===0,'row-stripe':strip && index!==0 && index%2!==0}">
                <span class="m-table__column__index" v-if="showIndex&&columnIndex===0" :style="{visibility:index===0 && 'hidden'}">
                    {{index}}
                </span>
                <div v-if="index === 0" class="thead" :class="[justifyAlign(column,columnIndex)]" >
                    <span>
                        {{element.value||element}}
                    </span>
                    
                </div>
                <div v-else class="tbody-row" :class="justifyAlign(column,columnIndex)">
                    <span class="text">
                        {{element}}
                    </span>
                </div>
            </div>
           </div>
        </div>
    </div>
</template>
<script>
import "./table.css";
export default {
  name: "mTable",
  props: {
    //是否显示序号
    showIndex: {
      type: Boolean,
      default: true
    },
    //是否显示斑马线
    strip: {
      type: Boolean,
      default: true
    },
    //设置伸缩占满空间的列 默认第一列占满
    grow: {
      type: Number,
      default: 1
    },
    //排序
    sortCallback: Function,
    //初始化之前给指定的列排序
    defaultSort: Number,
    //默认降序 指定该属性值则为升序
    defaultSortAsc: Boolean,
    /**
     * 表头
     * 数据格式如下：
     * ['第一列','第二列']
     * or
     * [{
     *  value:''; title txt
     *  sort:Boolean; defalut true
     *  align:'left' || 'center' || 'right'
     * }]
     */
    thead: {
      type: Array,
      default: []
    },
    //表数据
    data: {
      type: Array,
      default: []
    },
    //使用动态数据时 需要先给出数据的总条数
    dataCount: Number
  },
  data() {
    return {
      body: this.data,
      table:[]
    };
  },
  methods: {
    justifyAlign(column,columnIndex) {
        return 'justify-align-'+(column[0]['align']||(columnIndex===0?'left':'right'));
    },
    tableData(){
      const data = [];
      let column, row, num;
      for (const [index, title] of this.thead.entries()) {
        column = [];
        column.push(title);
        num = 0;
        for(let i=0;i<this.body.length;i++){
            row = this.body[i];
          if (row && Array.isArray(row)) {
            column.push(row[index]);
          } else {
            break;
          }
        }
        data.push(column);
      }
      this.table=data;
      return data;
    }
  },
  watch:{
      data:function(){
          this.body=this.data;
          this.tableData();
      }
  }
};
</script>

