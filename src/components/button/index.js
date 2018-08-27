import MButton from './Button.vue';

MButton.install = function (Vue){
    Vue.component(MButton.name,MButton);
}

export default MButton;