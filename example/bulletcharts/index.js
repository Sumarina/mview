import ptBulletChart from "./src/bulletcharts.vue";

ptBulletChart.install=function(vue){
    vue.component(ptBulletChart.name,ptBulletChart);
}

export default ptBulletChart;