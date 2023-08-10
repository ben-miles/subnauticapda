<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
// import TheFooter from './components/TheFooter.vue'
import itemsData from '@/assets/data/items.json'

export default {
	components: {
		TheHeader,
		// TheFooter
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
	<h1 id="title"><span>SUB</span>NAUTICA PDA</h1>
	<div id="bkg"></div>
</template>

<style></style>
