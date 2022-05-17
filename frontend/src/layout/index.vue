<template>
	<div id="wrap" class="wrap">
		<TheHeader></TheHeader>
		<transition name="fade-transform">
			<router-view :key="key"></router-view>
		</transition>
		<TheFooter></TheFooter>
	</div>
</template>

<script>
import { TheHeader, TheFooter } from './components'

export default {
	name: 'DefaultLayout',
	computed : {
		key() {
			return this.$route.path
		}
	},
	components: {
		TheHeader,
		TheFooter
	}
}
</script>