import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n=new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./assets/common/lang/zh'),   // 中文语言包
    'en-US': require('./assets/common/lang/en')    // 英文语言包
  }
})


new Vue({
  i18n,//不要忘记
  router,
  store,
  render: h => h(App)
}).$mount('#app')
