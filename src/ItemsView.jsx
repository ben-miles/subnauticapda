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
	const toggleGroup = (id) => {
		let group = document.getElementById(id);
		group.classList.toggle("collapsed");
	};

	return (
		<>
		<div className="pane" id="items-pane">
			<div id="items-container">
				{items.map((group) => (
					<div className='group collapsed' id={group.id} key={group.id}>
						<h3 onClick={() => { toggleGroup(group.id); }}>{group.name}</h3>
						{group.items.map((item) => (
							<div className={'item ' + item.id} key={item.id}>
								<img src={'./src/assets/images/' + item.id + '.png'} />
								<span>{item.name}</span>
							</div>
						))}
					</div>
				</div>
			</div> */}
		</>
				))}
			</div>
		</div>
	)
}