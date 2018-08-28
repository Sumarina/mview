import MSwitch from './switch';
import MButton from './button';
import MSelect from './select';
import MTable from './table';
import MPagination from './pagination';


const components = [
  MSwitch,
  MButton,
  MSelect,
  MSelect.MOption,
  MTable,
  MPagination
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  MSwitch,
  MButton,
  MSelect,
  MTable,
  MPagination,
  MOption:MSelect.MOption
}
