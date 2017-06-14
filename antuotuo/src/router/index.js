import Vue from 'vue'
import Router from 'vue-router'
import sysUser from '@/components/sysUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sysUser',
      component: sysUser
    }
  ]
})
