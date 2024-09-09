export default function ItemsView({view, items, setItems}) {
	const toggleGroup = (groupId) => {
		let itemsCopy = {...items};
		itemsCopy[groupId].isOpen = !itemsCopy[groupId].isOpen;
		setItems(itemsCopy);
	};
	const toggleItem = (groupId,itemId) => {
		let itemsCopy = {...items};
		itemsCopy[groupId].items[itemId].isActive = !itemsCopy[groupId].items[itemId].isActive;
		setItems(itemsCopy);
	};

	if (view === 'Items') {
		return (
			<div className="pane" id="items-pane">
				<div id="items-container">
					{Object.entries(items).map(([groupKey, groupValue]) => (
						<div className={'group ' + (groupValue.isOpen ? 'open' : '')} id={groupKey} key={groupKey}>
							<h3 onClick={() => { toggleGroup(groupKey); }}>{groupValue.name}</h3>
							{Object.entries(groupValue.items).map(([itemKey, itemValue]) => (
								<div className={'item ' + (itemValue.isActive ? 'active' : '')} id={itemKey} key={itemKey} onClick={() => { toggleItem(groupKey,itemKey); }}>
									<img src={'./src/assets/images/' + itemKey + '.png'} />
									<span>{itemValue.name}</span>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		)
	}
}