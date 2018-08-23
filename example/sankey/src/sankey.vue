<template>
    <div class="chart-sankey">
        <!-- <button @click="charts">click me</button> -->
        <div id="main"></div>
    </div>
</template>

<script>
import "./sankey.scss";
import echarts from "echarts";

export default {
  name: "ptSankey",
  props:{
    sankeyData:Object
  },
  data() {
    return {
      selectNodesList: []
    };
  },
  methods: {
    charts: function() {
      var self = this;
      var data = {
        nodes: this.sankeyData.datas.nodes,
        links: this.sankeyData.datas.links
      };
      var myChart = echarts.init(document.getElementById("main"), "light", {
        renderer: "svg"
      });
      var option = {
        title: {
          text: "Sankey Diagram"
        },
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            name: "sankey",
            type: "sankey",
            layout: "none",
            label: {
              formatter: "{title|{b}}",
              rich: {
                title: {
                  color: "red",
                  align: "center"
                }
              }
            },
            data: data.nodes,
            links: data.links,
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: "#aaa",
                opacity: 0.75
              }
            },
            lineStyle: {
              normal: {
                color: "source",
                curveness: 0.5
              }
            }
          }
        ]
      };
      myChart.setOption(option);

      myChart.on("click", function(params) {
        if (params.componentType === "series" && params.dataType === "node") {
          if (self.selectNodesList.indexOf(params.data.id) === -1) {
            self.selectNodesList[self.selectNodesList.length] = params.data.id;
          } else {
            var index = self.selectNodesList.indexOf(params.data.id);
            self.selectNodesList.splice(index, 1);
          }
          self.$emit("sankey-click-nodes", {
            nodeid: self.selectNodesList,
            token: self.sankeyData.token
          });
        }
      });

      self.$on("renderDataEnd", function(params) {
        if (self.selectNodesList.length > 0) {
          myChart.setOption({
            series: [
              {
                links: params.links,
                data: params.nodes
              }
            ]
          });
        } else {
          myChart.setOption(option);
        }
      });
    }
  },
  created: function() {
    console.log("child created", this.sankeyData);
  },
  mounted: function() {
    this.charts();
    console.log("child mounted...", this.sankeyData);
  },
  updated: function() {
    console.log("child updated...", this.sankeyData);
  },
  watch: {
    sankeyData: function(val, oldval) {
      if (val.datas && val.highlight) {
        var nodes = renderNodes(val);
        var links = renderLinks(val);
        this.$emit("renderDataEnd", { nodes: nodes, links: links });
      }
      // else{
      //     this.charts();
      // }
    }
  }
};

// 渲染数据nodes
function renderNodes(val) {
  var datasNodes = [];
  val.datas.nodes.forEach(element => {
    var tempObj = copy(element);
    tempObj["itemStyle"] = { opacity: 0.2 };
    val.highlight.nodes.forEach(ele => {
      if (element["id"] === ele["id"]) {
        tempObj["itemStyle"] = { opacity: 1 };
      }
    });
    datasNodes.push(tempObj);
  });
  return datasNodes;
}
//渲染数据links
function renderLinks(val) {
  var datasLinks = [];
  val.datas.links.forEach(element => {
    var tempObj = copy(element);
    tempObj["lineStyle"] = { opacity: 0.2 };
    val.highlight.links.forEach(ele => {
      if (element["id"] === ele["id"]) {
        tempObj["lineStyle"] = { opacity: 1 };
      }
    });
    datasLinks.push(tempObj);
  });
  return datasLinks;
}
//浅复制 对象
function copy(obj) {
  var newobj = {};
  for (var attr in obj) {
    newobj[attr] = obj[attr];
  }
  return newobj;
}
</script>

