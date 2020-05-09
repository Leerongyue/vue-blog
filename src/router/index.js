import Vue from 'vue'
import Router from 'vue-router'
/*
import Create from '../Pages/Create/Create.vue'
import Detail from '../Pages/Detail/Detail.vue'
import Edit from '../Pages/Edit/Edit.vue'
import Home from '../Pages/Index/Home.vue'
import Login from '../Pages/Login/Login.vue'
import My from '../Pages/My/My.vue'
import Register from '../Pages/Register/Register.vue'
import User from '../Pages/User/User.vue'
*/

import store from '../store'

window.store = store

Vue.use(Router)

/*export default new Router({
  routes: [
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    },
  ]
})
 */
////////////////懒加载//////////////////
const router = new Router({

  routes: [
    {
      path: '/',
      component: () => import('../Pages/Index/Home.vue')
    },
    {
      path: '/login',
      component: () => import('../Pages/Login/Login.vue')
    },
    {
      path: '/register',
      component: () => import('../Pages/Register/Register.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('../Pages/Detail/Detail.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('../Pages/Edit/Edit.vue'),
      meta: {requireAuth: true}
    },
    {
      path: '/create',
      component: () => import('../Pages/Create/Create.vue'),
      meta: {requireAuth: true}
    },
    {
      path: '/user/:userId',
      component: () => import('../Pages/User/User.vue')
    },
    {
      path: '/my',
      component: () => import('../Pages/My/My.vue'),
      meta: {requireAuth: true}
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    store.dispatch('checkLogin').then((isLogin) => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
