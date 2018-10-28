import MNotification from './notification.vue';

MNotification.install=function(Vue){
    Vue.component(MNotification.name,MNotification);
}

export default MNotification;