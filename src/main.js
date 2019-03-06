import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from '../src/assets/js/eventbus'

Vue.use(eventBus);
//Vant
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);

//加载图
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: require('../src/assets/img/loading.png'),
    loading: require('../src/assets/img/loading.png'),
    attempt: 1,
    listenEvents: ['scroll']
});

//axios
import axios from 'axios'
Vue.prototype.$http = axios;


const userInfoStorage = window.localStorage.getItem("Pumei_user");
let userInfo = [];
if(userInfoStorage){
    userInfo = JSON.parse(userInfoStorage)
}

Vue.prototype.State = {
    updateInfo(info) {
        this.userInfo.member_name = info.member_name;
        this.userInfo.avatar = info.avatar;
        window.localStorage.setItem('Pumei_user', JSON.stringify(this.userInfo))
    },
    isLogin: !!userInfo.access_token,
    token: userInfo.access_token || '',
    userInfo
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

