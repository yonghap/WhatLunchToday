import defaultLayout from '@/layout/index.vue'

export default [
	{
		path: '/',
		name: 'home',
		component: defaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				meta: {
					title: 'B DOT'
				},
				component: () => import('@/views/main.vue')
			}
		]
	}
]