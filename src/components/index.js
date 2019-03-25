import MSwitch from './switch';
import MButton from './button';
import MSelect from './select';
import MIcon from './icon';
import MRow  from './row';
import MCol from './col';
import MTable from './table';
import MPagination from './pagination';
import MSlider from './slider';
import MTooltip from './tooltip';
import MNotification from './notification';
import MProgress from './progress';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle,faExclamationCircle,faTimesCircle,faTimes,faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheckCircle,faExclamationCircle,faTimesCircle,faTimes,faChevronLeft,faChevronRight);

const components = [
  MSwitch,
  MButton,
  MSelect,
  MSelect.MOption,
  MIcon,
  MRow,
  MCol,
  MTable,
  MPagination,
  MSlider,
  MTooltip,
  MNotification,
  MProgress,
  FontAwesomeIcon
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
  MIcon,
  MRow,
  MCol,
  MTable,
  MPagination,
  MSlider,
  MTooltip,
  MNotification,
  MProgress,
  FontAwesomeIcon,
  MOption:MSelect.MOption
}
