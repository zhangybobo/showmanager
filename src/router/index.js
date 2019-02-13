import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login.vue'
import home from '@/components/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:home
    },
    {
      path: '/login',
      name: 'login',
      component:login
    }
  ]
})
