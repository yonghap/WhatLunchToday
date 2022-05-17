import defaultLayout from '@/layout/index.vue'

export default [
	{
		path: '/login',
		name: 'login',
		component: defaultLayout,
		children: [
			{
				path: '',
				name: 'login',
				meta: {
					title: 'B DOT'
				},
				component: () => import('@/views/admin/dashboard.vue')
			}
		]
	}
]