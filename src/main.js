import Vue from 'vue';
import App from './App';
import fly from './utils/fly';
import WXP from 'minapp-api-promise';
import './../static/weui.css';
import 'font-awesome/css/font-awesome.min.css';
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
Vue.prototype.$wx = WXP;
Vue.prototype.$http = fly;
Vue.prototype.globalData = getApp();
