<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
	components: {
		TheHeader,
		TheFooter
	}
}
</script>

<template>
	<div id="pda">
		<div id="screen">
			<TheHeader />
			<RouterView :key="$route.path" />
			<!-- <TheFooter /> -->
		</div>
	</div>
	<TheFooter />
	<div id="bkg"></div>
</template>

<style></style>
