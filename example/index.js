import ptSwitch from './switch';
import ptBulletChart from './bulletcharts';
import ptSankey from './sankey';

const PtUI={};
const componets=[ptSwitch,ptBulletChart,ptSankey];
PtUI.install=function(Vue){
    componets.map(component=>{
        Vue.component(component.name,component);
    })
}
export default PtUI;