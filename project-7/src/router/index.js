import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Auth from '../components/auth.vue'
import Home from '../components/header.vue'
import createPost from '../components/createPost.vue'
import viewProfile from '../components/viewProfile.vue'


export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: createPost
    },
    {
      path: '/viewProfile',
      name: 'viewProfile',
      component: viewProfile
      // props: true 
    }
  ]
})