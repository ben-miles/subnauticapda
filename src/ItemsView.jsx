import { useState } from 'react';

// export default {
// 	components: {},
// 	data() {
// 		return {}
// 	},
// 	emits: ["toggleItem"],
// 	methods: {
// 		// Toggle group
// 		toggle: function(groupId){
// 			let group = document.getElementById(groupId);
// 			group.classList.toggle("collapsed");
// 		},
// 		toggleItem(itemId) {
// 			// console.log(itemId)
// 			this.$emit("toggleItem", itemId);
// 		}
// 	},
// 	props: {
// 		itemsData: Object,
// 		list: Array
// 	}
// }

	const [count, setCount] = useState(0);
export default function ItemsView({items, setItems}) {

	return (
		<>
			{/* <div className="pane" id="items-pane">
				<div id="items-container">
					<div v-for="(group, groupindex) in itemsData" className="group collapsed" :id="group.id">
						<h3 v-on:click="toggle(group.id)">{{ group.name}}</h3>
						<!-- <div v-for="(item, itemindex) in group.items" className="item" v-on:click="addToList(groupindex, itemindex)"> -->
						<div v-for="(item, itemindex) in group.items" className="item" v-on:click="toggleItem(item.id)">
							<img :src="`src/assets/images/${item.id}.png`" />
							<span>{{ item.name}}</span>
						</div>
					</div>
				</div>
			</div> */}
		</>
	)
}