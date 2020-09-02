import Vue from "vue";
import App from "./App";
import {hasPermission} from "./utils/hasPermission";
import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import {default as api} from './utils/api'
import echarts from 'echarts'
import ElementUI from "element-ui";
import "./assets/style/element-variables.scss";
import 'element-ui/lib/theme-chalk/index.css'
import popout from '@/components/PopoutDialog/Index' //弹框组件
import sysTable from "@/components/Table/Index"; //表格组件

Vue.prototype.$echarts = echarts

import store from "./store";
import router from "./router";

import "./permission"; // permission control

import "./utils/error-log"; // error log

import * as filters from "./filters"; // 全局实用程序过滤器


import {Notification} from 'element-ui';

import LunarFullCalendar from "vue-lunar-full-calendar"; //日历
Vue.use(LunarFullCalendar);
Vue.use(ElementUI);

Vue.prototype.$http = api;
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$notify = Notification;
Vue.component('popout', popout);
Vue.component('sysTable', sysTable);

Vue.prototype.hasRole = hasPermission

// 注册全局实用程序过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
