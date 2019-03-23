import Vue from 'vue';
import mIcon from '../components/icon';

Vue.component('m-icon',mIcon);

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)