import {createRouter, createWebHistory} from 'vue-router'
import adminRouter from './admin';
import clientRouter from './client';

let allRoutes = [];
allRoutes = allRoutes.concat(adminRouter, clientRouter);

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: allRoutes
})

export default router