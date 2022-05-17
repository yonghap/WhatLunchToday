<template>
	<div id="wrap" class="wrap">
		<div class="admin">
			<Sidebar></Sidebar>
			<router-view v-slot="{ Component, route }">
				<transition name="fade-transform" mode="out-in">
					<component :is="Component" :key="route.path"></component>
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
import { Sidebar } from './components';


export default {
	name: 'adminLayout',
	computed: {
		key() {
			return this.$route.path
		}
	},
	components: {
		Sidebar
	}
}
</script>

<style lang="scss">
	@import "@/assets/admin/css/common.scss";
</style>