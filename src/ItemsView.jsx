export default function ItemsView({view, items, setItems}) {
	const toggleGroup = (id) => {
		let group = document.getElementById(id);
		group.classList.toggle("collapsed");
	};
	// toggleItem adds or removes the item from the list state object
	const toggleItem = (groupIndex,itemIndex) => {
		let itemsCopy = [...items];
		itemsCopy[groupIndex].items[itemIndex].isActive = !itemsCopy[groupIndex].items[itemIndex].isActive;
		setItems(itemsCopy);
		// console.log(groupIndex, itemIndex, items[groupIndex].items[itemIndex]);
	};



	if (view === 'Items') {
		return (
			<div className="pane" id="items-pane">
				<div id="items-container">
					{items.map((group, groupIndex) => (
						<div className='group collapsed' id={group.id} key={groupIndex}>
							<h3 onClick={() => { toggleGroup(group.id); }}>{group.name}</h3>
							{group.items.map((item, itemIndex) => (
								<div className={'item ' + (item.isActive ? 'active' : '')} id={item.id} key={itemIndex} onClick={() => { toggleItem(groupIndex,itemIndex); }}>
									<img src={'./src/assets/images/' + item.id + '.png'} />
									<span>{item.name}</span>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		)
	}
}