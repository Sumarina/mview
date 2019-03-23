import MSwitch from './switch';
import MButton from './button';
import MSelect from './select';
import MIcon from './icon';

const components = [
  MSwitch,
  MButton,
  MSelect,
  MSelect.MOption,
  MIcon
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
  MOption:MSelect.MOption,
  MIcon
}
