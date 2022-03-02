<template>
	<div class="home">
		<div v-if="projects.length">
			<div v-for="project in projects" :key="project.id">
				<Project @update="handleUpdate" @delete="handleDelete" :project="project" />
			</div>
		</div>
	</div>
</template>

<script>
import Project from "../components/Project.vue";
export default {
	components: { Project },
	data() {
		return {
			projects: [],
		};
	},
	mounted() {
		fetch("http://localhost:3000/projects")
			.then((response) => response.json())
			.then((data) => (this.projects = data));
	},
	methods: {
		handleDelete(id) {
			this.projects = this.projects.filter((project) => project.id !== id);
		},
		handleUpdate(id) {
			const project = this.projects.find((project) => project.id === id);
			project.complete = !project.complete;
		},
	},
};
</script>

<style>
</style>