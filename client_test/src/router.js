import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import Index from './views/Index.vue'
import Regi from './views/regi.vue'
import notFound from './views/404.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/index' // 进入目录不输入后缀，跳转到index
		},
		{
			path: '*', // 什么都没找到，进入404
			name: '404',
			component: notFound
		},
		{
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			path: '/regi',
			name: 'regi',
			component: Regi
		}
	]
})
