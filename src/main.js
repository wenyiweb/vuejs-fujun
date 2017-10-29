// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';
// 引入flexible
import 'lib-flexible/flexible';
// 引入需要打包的外部样式
import 'common/scss/index.scss';

// 当fastclick和better-scroll冲突时，可以给标签加class="needsClick"
FastClick.attach(document.body);

/**
 * 懒加载组件配置
 */
Vue.use(VueLazyload, {
  loading: require('common/image/1-3.gif')
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
