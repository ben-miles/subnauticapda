import IconPin from './IconPin.jsx';

export default function ViewItems({view, items, setItems}) {
	const toggleGroup = (groupId) => {
		let itemsCopy = {...items};
		itemsCopy[groupId].isOpen = !itemsCopy[groupId].isOpen;
		setItems(itemsCopy);
		localStorage.setItem('items', JSON.stringify(items));
	};
	const toggleItem = (groupId,itemId) => {
		let itemsCopy = {...items};
		if(itemsCopy[groupId].items[itemId].isPinned) {
			itemsCopy[groupId].items[itemId].isPinned = false;
		} else {
			itemsCopy[groupId].items[itemId].isPinned = true;
			itemsCopy[groupId].items[itemId].quantity = itemsCopy[groupId].items[itemId].quantity ? itemsCopy[groupId].items[itemId].quantity : 1;
		}
		setItems(itemsCopy);
		localStorage.setItem('items', JSON.stringify(items));
	};

	if (view === 'Items') {
		return (
			<div className="pane items">
				{Object.entries(items).map(([groupKey, groupValue]) => (
					<div className={'group ' + (groupValue.isOpen ? 'open' : '')} id={groupKey} key={groupKey}>
						<h3 onClick={() => { toggleGroup(groupKey); }}>{groupValue.name}</h3>
						{Object.entries(groupValue.items).map(([itemKey, itemValue]) => (
							<div className={'item ' + (itemValue.isPinned ? 'active' : '')} id={itemKey} key={itemKey} onClick={() => { toggleItem(groupKey,itemKey); }}>
								{itemValue.isPinned && <IconPin />}
								<img src={'images/' + itemKey + '.png'} alt={itemValue.name} loading="lazy" />
								<span>{itemValue.name}</span>
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
}