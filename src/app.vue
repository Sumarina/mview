<template>
<div>
  
    <pt-switch v-model='switchVal'></pt-switch>


    <!--以下全部注释 暂时不需要-->
    <!-- <pt-bullet-chart v-model='bulletChartVal' v-on:counter-click="counterClick">
    </pt-bullet-chart>
    <pt-sankey v-on:sankey-click-nodes="getSankeyDatasHighlight" v-if="sankeyDatas" v-bind:sankeyData="sankeyDatas"></pt-sankey>
    <p>app</p>
    <span @click="cube">
        hello parents
    </span>
    <p>{{bulletChartVal}}</p> -->
</div>  
</template>
<script>
import "./style.scss";
import $ from "jquery";
import { cube } from "./math.js";
export default {
  data() {
    return {
      msg: "hello marin ahah",
      switchVal: true,
      bulletChartVal: 0,
      option: {
        service: "datadeck",
        version: "1.0"
      },
      token: "",
      sankeyDatas: null
    };
  },
  methods: {
    cube: function() {
      console.log(cube(5));
    },
    counterClick: function(val) {
      this.bulletChartVal = val;
    },
    getSankeyDatas: function(params) {
      var option = this.extend(
        {
          date: "2018-07-08",
          sid: "31468e4c",
          token: this.token
        },
        this.option
      );
      var p = new Promise(function(resolve, reject) {
        $.ajax({
          type: "post",
          url: "https://dataexport.ptengine.cn/datadeck/userpath",
          data: option,
          dataType: "json",
          success: function(data) {
            resolve(data);
          }
        });
      });
      return p;
    },
    extend: function(target, obj) {
      return $.extend(target, obj);
    },
    login: function() {
      var option = this.extend(
        {
          token:
            "c1a361b3da3c1422abc55751526d8d15e6fe121559b3a9a0bf396e5999231553"
        },
        this.option
      );
      var p = new Promise(function(resolve, reject) {
        $.ajax({
          type: "post",
          url: "https://dataexport.ptengine.cn/login",
          data: option,
          dataType: "json",
          success: function(data) {
            resolve(data);
          }
        });
      });
      return p;
    },
    getSankeyDatasHighlight: function(params) {
      var self = this;
      self.token = params.token;
      var options = this.extend(
        {
          date: "2018-07-08",
          sid: "31468e4c",
          nodes_id: params.nodeid,
          token: self.token
        },
        this.option
      );
      var p = new Promise(function(resolve, reject) {
        $.ajax({
          type: "post",
          url: "https://dataexport.ptengine.cn/datadeck/userpath/highlight",
          data: options,
          dataType: "json",
          success: function(result) {
            self.sankeyDatas = {
              datas: self.sankeyDatas.datas,
              highlight: {
                nodes: result.data.nodes,
                links: result.data.links
              },
              token: result.token
            };
            resolve(result);
          }
        });
      });
      return p;
    }
  },
  created: function() {
    console.log("parent created");
  },
  mounted: function() {
    console.log("parent mounted");
    this.$nextTick(function() {
      var self = this;
      //get token by login
      self
        .login()
        .then(function(data) {
          self.token = data.token;
          return self.getSankeyDatas();
        })
        .then(function(result) {
          if (result.status === "success") {
            self.sankeyDatas = {
              datas: {
                nodes: result.data.nodes,
                links: result.data.links
              },
              token: result.token
            };
            self.token = result.token;
          }
        });
    });
  }
};
</script>

