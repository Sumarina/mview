// import _ from 'lodash';
// import './style.css'
// import printMe from './print';

// function component(){
//     var element=document.createElement('div');
//     var btn=document.createElement('button');
//     element.innerHTML=_.join(['hello ','webpack'],'');
//     btn.innerHTML='click me and check the console';
//     btn.onclick=printMe
//     element.appendChild(btn);
//     return element;
// }
// let element=component();
// document.body.appendChild(element);

// if(module.hot){
//     module.hot.accept('./print.js',function(){
//         console.log('accepting the update printMe module');
//         // printMe();
//         document.body.removeChild(element);
//         element=component();
//         document.body.appendChild(element);
//     })
// }

import Vue from "vue";
import App from "./app.vue";
import PtUI from "../example";


Vue.use(PtUI);

new Vue({
  el: "#app",
  template: "<App />",
  components: { App }
});
