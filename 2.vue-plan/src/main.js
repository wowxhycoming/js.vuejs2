// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 引入 bootstrap 到全局下
import 'bootstrap/dist/css/bootstrap.css';
import {store} from './store';

// Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store, // 管理状态
    ...App
});
