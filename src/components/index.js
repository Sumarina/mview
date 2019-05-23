import MSwitch from './switch';
import MButton from './button';
import MSelect from './select';
import MTable from './table';
import MPagination from './pagination';
import MSlider from './slider';
import MTooltip from './tooltip';
import MNotification from './notification';
import MProgress from './progress';
import MMessage from './message';
import MDatepicker from './datepicker';
import MPopover from './popover';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faExclamationCircle, faTimesCircle, faTimes, faChevronLeft, faChevronRight, faCalendarAlt, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheckCircle, faExclamationCircle, faTimesCircle, faTimes, faChevronLeft, faChevronRight, faCalendarAlt, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight);

const components = [
  MSwitch,
  MButton,
  MSelect,
  MSelect.MOption,
  MTable,
  MPagination,
  MSlider,
  MTooltip,
  MNotification,
  MProgress,
  MMessage,
  MDatepicker,
  MPopover,
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
  MTable,
  MPagination,
  MSlider,
  MTooltip,
  MNotification,
  MProgress,
  MMessage,
  MDatepicker,
  MPopover,
  FontAwesomeIcon,
  MOption: MSelect.MOption
}
