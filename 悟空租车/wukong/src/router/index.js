import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Detail from '@/course/Detail'
import Detail1 from '@/course/Detail1'
import Detail2 from '@/course/Detail2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detail',
      component: Detail2
    }
  ]
})
