<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import itemsData from '@/assets/data/items.json'

export default {
	components: {
		TheHeader,
		TheFooter
	},
	data() {
		return {
			itemsData,
			list: []
		}
	},
	methods: {
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