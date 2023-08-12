<script>
import { RouterLink } from 'vue-router'
import itemsData from '@/assets/data/items.json'
// import IconTranslator from '../components/icons/IconTranslator.vue';
// import IconItems from '../components/icons/IconItems.vue'

export default {
	components: { 
		// IconTranslator,
		// IconItems 
	},
	data() {
		return {
			itemsData
		}
	},
	methods: {
		// Toggle group
		toggle: function(groupId){
			let group = document.getElementById(groupId);
			group.classList.toggle("collapsed");
		},
		// Add an item from data.items to data.list
		addToList: function(groupindex,itemindex){
			let itemOriginal = this.groups[groupindex].items[itemindex];
			let itemList = this.list.push(itemOriginal) - 1;
			if(itemOriginal.recipe){
				// Add multiplier with default value
				this.list[itemList].recipe.multiplier = 1;
				// Copy original yield & ingredients quantities for later reference
				this.list[itemList].recipe.yieldOriginal =itemOriginal.recipe.yield;
				let ingredients = this.list[itemList].recipe.ingredients;
				for(i = 0; i < ingredients.length; i++){
					ingredients[i].quantity = ingredients[i].quantityOriginal = itemOriginal.recipe.ingredients[i].quantity; 
				}
			}
		},
	}
}
</script>

<template>

	<!-- HEADING -->
	<div id="heading">
		<h2>Items</h2>
	</div>

	<!-- PANES -->
	<div id="panes">
		<div class="pane" id="items-pane">
			<div id="items-container">
				<div v-for="(group, groupindex) in itemsData" class="group collapsed" :id="group.id">
					<h3 v-on:click="toggle(group.id)">{{ group.name }}</h3>
					<div v-for="(item, itemindex) in group.items" class="item" v-on:click="addToList(groupindex,itemindex)">
						<img :src="'src/assets/images/' + item.id + '.png'" />
						<span>{{ item.name }}</span>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<style>

</style>