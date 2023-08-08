<script>
import { RouterLink } from 'vue-router'
// import IconTranslator from '../components/icons/IconTranslator.vue';
// import IconItems from '../components/icons/IconItems.vue'

export default {
	components: { 
		// IconTranslator,
		// IconItems 
	}
}
</script>

<template>

	<!-- HEADING -->
	<div id="heading">
		<h2>List</h2>
	</div>

	<!-- PANES -->
	<div id="panes">

		<div class="pane" id="items-pane">
			<!-- <div id="items-container">
				<div v-for="(group, groupindex) in groups" class="group collapsed" :id="group.name | slug">
					<h3 v-on:click="toggle(group.name)">{{ group.name }}</h3>
					<div v-for="(item, itemindex) in group.items" class="item" v-on:click="addToList(groupindex,itemindex)">
						<img :src="item.name | slug | img_src" />
						<span>{{ item.name }}</span>
					</div>
				</div>
			</div> -->
		</div>

	</div>

</template>

<style>

</style>