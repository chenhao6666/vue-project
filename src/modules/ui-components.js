
import Vue from 'vue'
import UITitleBox from '../components/commons/UITitleBox.vue'

import UIInput from '../components/commons/UIInput.vue'

import { Search } from 'mint-ui';


Vue.component('ui-title-box', UITitleBox)
Vue.component('ui-input', UIInput)
Vue.component(Search.name, Search);