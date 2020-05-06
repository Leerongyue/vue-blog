import Vue from 'vue'
import Router from 'vue-router'
import Create from '../Pages/Create/Create.vue'
import Detail from '../Pages/Detail/Detail.vue'
import Edit from '../Pages/Edit/Edit.vue'
import Home from '../Pages/Index/Home.vue'
import Login from '../Pages/Login/Login.vue'
import My from '../Pages/My/My.vue'
import Register from '../Pages/Register/Register.vue'
import User from '../Pages/User/User.vue'

Vue.use(Router)

export default new Router({
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
