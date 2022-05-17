import {createRouter, createWebHistory} from 'vue-router'
import defaultLayout from '@/layout/index.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component : defaultLayout,
			children : [
				{
					path : '/',
					name : 'main',
					meta : {
						title : 'WhatLunchToday'
					},
					component : () => import('@/views/HomeView.vue')
				}
			]
		}
	]
})

export default router