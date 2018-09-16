import MSwitch from './switch';
import MButton from './button';
import MSelect from './select';
import MTable from './table';
import MPagination from './pagination';
import MSlider from './slider';


const components = [
  MSwitch,
  MButton,
  MSelect,
  MSelect.MOption,
  MTable,
  MPagination,
  MSlider
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
  MSlider,
  MOption:MSelect.MOption
}
