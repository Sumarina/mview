import MSelect from './Select.vue';
import MOption from './Option.vue';

MSelect.install = function (Vue) {
  Vue.component(MSelect.name, MSelect);
  Vue.component(MOption.name, MOption);
}

MSelect.MOption =  MOption

export default MSelect;
