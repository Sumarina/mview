import ptSankey from "./src/sankey.vue";

ptSankey.install = function(vue) {
  vue.component(ptSankey.name, ptSankey);
};
export default ptSankey;
