import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Detail from '@/views/Detail'
import More from '@/views/More'
import Search from '@/views/Search'

import Login from '@/views/Login'
import Register from '@/views/Register'

import Center from '@/views/personal/Center'
import Edit from '@/views/personal/Edit'
import Focus from '@/views/personal/Focus'
import Collect from '@/views/personal/Collect'
import MyComment from '@/views/personal/MyComment'
import Column from '@/views/personal/Column'

import Test from '@/views/personal/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/more/:id',
    name: 'More',
    component: More
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },


  {
    path: '/center',
    name: 'Center',
    component: Center,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      auth: true
    }
  },
  {
    path: '/focus',
    name: 'Focus',
    component: Focus,
    meta: {
      auth: true
    }
  },
  {
    path: '/collect',
    name: 'Collect',
    component: Collect,
    meta: {
      auth: true
    }
  },
  {
    path: '/mycomment',
    name: 'MyComment',
    component: MyComment,
    meta: {
      auth: true
    }
  },
  {
    path: '/column',
    name: 'Column',
    component: Column,
    meta: {
      auth: true
    }
  },

  {
    path: '/test',
    name: 'Test',
    component: Test,
  }


]

const router = new VueRouter({
  routes
})

export default router
