import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import Index from './views/index'
import Regi from './views/regi'
import Login from './views/login'
import notFound from './views/404'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
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
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})

// 路由守卫
router.beforeEach((to, from, next) => {
	// 用户登录以后保存token
	const isLogin = localStorage.token ? true : false;

	// login页面在任何情况下都可以访问
	// 保存token后，可以访问其他页面
	// 没有保存token，访问其他页面，会跳转到login
	if (to.path === '/login') {
		next()
	} else {
		isLogin ? next() : next('/login');
	}
})


export default router;
