import adminLayout from '@/layout/admin/index.vue'

export default [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/admin/login/index.vue')
	},
	{
		path : '/admin',
		component : adminLayout,
		children : [
			{
				path: 'dashboard',
				name: 'Admin Works List1',
				component: () => import('@/views/admin/dashboard/index.vue')
			},
			{
				path: 'banner',
				name: 'Admin Works List',
				component: () => import('@/views/admin/banner/index.vue')
			},
			{
				path: 'banner/write',
				name: 'Admin Works Write',
				component: () => import('@/views/admin/banner/write.vue')
			},
			{
				path: 'portfolio',
				name: 'Admin Works Write2',
				component: () => import('@/views/admin/portfolio/index.vue')
			}

		]
	},

]