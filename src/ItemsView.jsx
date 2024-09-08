export default function ItemsView({view, items, setItems}) {
	const toggleGroup = (groupIndex) => {
		let itemsCopy = [...items];
		itemsCopy[groupIndex].isOpen = !itemsCopy[groupIndex].isOpen;
		setItems(itemsCopy);
	};
	const toggleItem = (groupIndex,itemIndex) => {
		let itemsCopy = [...items];
		itemsCopy[groupIndex].items[itemIndex].isActive = !itemsCopy[groupIndex].items[itemIndex].isActive;
		setItems(itemsCopy);
	};

	if (view === 'Items') {
		return (
			<div className="pane" id="items-pane">
				<div id="items-container">
					{items.map((group, groupIndex) => (
						<div className={'group ' + (group.isOpen ? 'open' : '')} id={group.id} key={groupIndex}>
							<h3 onClick={() => { toggleGroup(groupIndex); }}>{group.name}</h3>
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