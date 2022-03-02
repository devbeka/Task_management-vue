import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home';
import AddProject from '../views/AddProject';
import EditProject from '../views/EditProject';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/add-project',
		name: 'AddProject',
		component: AddProject,
	},
	{
		path: '/projects/:id',
		name: 'EditProject',
		component: EditProject,
		props: true
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
