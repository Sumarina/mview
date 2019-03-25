import MProgress from './progress.vue';
 
MProgress.install=function(Vue){
    Vue.component(MProgress.name,MProgress);
}

export default MProgress;