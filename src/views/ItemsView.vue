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
.group {
	align-items: flex-start;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	height: auto;
	justify-content: flex-start;
	margin-bottom: 20px;
	overflow: hidden;
}
.group.collapsed {
	height: 44px;
	margin-bottom: 0;
}
.group.collapsed h3:before {
	transform: rotate(-90deg);
}
.group h3 {
    background: rgba(26, 102, 172, 0.6);
    border: 1px solid rgba(200, 234, 246, 0.6);
    box-shadow: inset 0 0 5px rgba(200, 234, 246, 0.5);
    font-size: .9em;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    padding: 3px 0 3px 10px;
    width: 100%;
}
.group h3:before {
	content: "⌵";
	margin-right: 10px;
	transform: rotate(0deg);
	display: inline-block;
}
.group h3:hover {
	background: rgba(0, 133, 255, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.6);
	box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.9);
}
.group .item {
    border-radius: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 5px;
    width: calc( 33.3% - 10px);
}
@media (min-width: 500px) {
	.group .item {
        width: calc( 25% - 10px);
	}
}
@media (min-width: 768px) {
	.group .item {
        width: calc( 16.6% - 10px);
	}
}
.group .item img {
	width: 100%;
}
.group .item span {
	display: block;
	font-size: .8em;
	line-height: 1;
	text-align: center;
}
.group .item:hover {
	background: #114cbf;
}
.group .item:active {
	background: #f28d00;
}
</style>