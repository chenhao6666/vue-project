import Vue from 'vue'
//swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
import '../stylesheets/main.scss'

//rem
import computed_rem from './rem'
 //计算rem
computed_rem(750,50)

// axios

import axios from 'axios'
Vue.prototype.$http = axios

import jsonp from 'jsonp'
Vue.prototype.jsonp = jsonp

//filters
import './filters'

//全局组件
import './ui-components'

//cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.prototype.$cookies.clear = function () {
    let keys = Vue.prototype.$cookies.keys()
    keys.forEach(key => {
        this.remove(key)
    });
}

import md5 from 'js-md5'
Vue.prototype.md5 = md5



Vue.config.productionTip = false