import Vue from 'vue'
import Router from 'vue-router'
import sysUser from '@/components/sysUser'
import sysMoudle from '@/components/sysMoudle'
import bsTaDept from '@/components/bsTaDept'
import sysRole from '@/components/sysRole'
import sysSystem from '@/components/sysSystem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sysUser',
      component: sysUser
    },
    {
      path: '/sysMoudle',
      name: 'sysMoudle',
      component: sysMoudle
    },
    {
      path: '/bsTaDept',
      name: 'bsTaDept',
      component: bsTaDept
    },
    {
      path: '/sysRole',
      name: 'sysRole',
      component: sysRole
    },
    {
      path: '/sysSystem',
      name: 'sysSystem',
      component: sysSystem
    }
  ]
})
