import Vue from 'vue'
import Router from 'vue-router'
import post from '@/components/post'
import allcontent from '@/components/allcontent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
    	path: '/',
    	name: 'content',
    	component: allcontent
    }
  ]
})
