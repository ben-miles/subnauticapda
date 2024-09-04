<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import itemsData from '@/assets/data/items.json'

export default {
	components: {
		TheHeader,
		TheFooter
		getLocalStorage: function(){
			// localStorage.clear(); // Uncomment to clear localStorage
			let localList = JSON.parse(localStorage.getItem("subnauticapda_list"));
			let localNotes = localStorage.getItem("subnauticapda_notes");
			this.list = localList ? localList : [];
			this.notes = localNotes ? localNotes : "";
		},
		setLocalStorage: function(){
			localStorage.setItem("subnauticapda_list", JSON.stringify(this.list));
			localStorage.setItem("subnauticapda_notes", this.notes);
		},
		toggleItem: function(itemId){
			console.log(itemId)
			// find items in each group in itemsData that match itemId
			
			let itemOriginal = this.itemsData.flatMap(item => group.items.find(item => item.id === itemId));
			// let itemOriginal = this.itemsData.find(group => group.items.find(item => item.id === itemId));
			console.log(itemOriginal);

			// let itemOriginal = this.itemsData.find(item => item.id === itemId);
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
		}
	}
}
</script>

<template>
	<div id="pda">
		<div id="screen">
			<TheHeader />
			<RouterView :key="$route.path" @toggleItem="toggleItem" :itemsData="itemsData" />
		</div>
	</div>
	<TheFooter />
	<div id="bkg"></div>
</template>

<style>
#app {
	overflow: hidden;
	position: relative;
	height: 100%;
	width: 100%;
}

#pda {
	background: url(@/assets/images/subnauticapda_pda_sm.png);
	background-repeat: repeat-x;
	background-size: contain;
	height: calc(100vh - 100px);
	padding: 50px 0;
	width: 100%; 
	filter: drop-shadow(2px 6px 20px rgba(0,0,0,0.5));
}
@media (min-width: 1024px) {
	#pda {
		background: url(@/assets/images/subnauticapda_pda_lg.png);
		background-position: 84.5% 0%;
		background-size: cover;
		height: 648px;
		width: 900px;
		margin-right: auto;
		margin-left: auto;
		padding: 0; 
	}
}
@media (min-width: 1280px) {
	#pda {
		height: 720px;
		width: 1000px;
	}
}
@media (min-width: 1650px) {
	#pda {
		height: 864px;
		width: 1200px;
	}
}

#screen {
	color: #fff;
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
}
@media (min-width: 1024px) {
	#screen {
		border-radius: 40px;
		height: 75%;
		padding: 2.5% 1.75%;
		position: relative;
		left: 27.5%;
		width: 67%;
		top: 13%;
	}
}

#heading h2 {
	border-bottom: 2px solid #dabc3e;
	color: #50bbcc;
	font-weight: 600;
	margin: 10px auto;
	padding-bottom: 5px;
	text-align: center;
	text-transform: uppercase;
	width: 100px;
}

#panes {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: stretch;
	align-items: stretch;
	overflow-y: auto;
	overflow-x: hidden;
	padding-right: 10px;
	line-height: 1.5;
}
#panes .pane {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: stretch;
	align-items: stretch;
}
#panes #notes-pane {
	margin: 10px 0;
}
#panes .pane textarea {
	background: transparent;
	border: 2px solid #c8eaf6;
	border-radius: 7px;
	box-shadow: inset 0 0 10px #c8eaf6;
	color: #e0f4ff;
	height: 100%;
	margin: 0;
	outline: none;
	padding: 10px;
	resize: none;
	width: 100%;
}
#panes p {
	margin-bottom: 1em;
}
#panes::-webkit-scrollbar {
	background: transparent;
	width: 25px;
}
#panes::-webkit-scrollbar-track {
	border: 2px solid rgba(150, 150, 150, 0.5);
	border-radius: 3px;
}
#panes::-webkit-scrollbar-thumb {
	background: #3976c6;
	border: 2px solid #c8eaf6;
	border-radius: 5px;
	box-shadow: inset 0 0 15px #c8eaf6;
}
#panes::-webkit-scrollbar-thumb:hover {
	background: #114cbf;
}

#bkg {
	background-image: url(@/assets/images/subnauticapda_bkg.jpg);
	background-size: cover;
	background-position: center;
	filter: blur(10px);
	height: 104%;
	width: 104%;
	position: absolute;
	top: -2%;
	left: -2%;
	z-index: -100;
}
</style>