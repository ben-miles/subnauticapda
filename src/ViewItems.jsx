import {useState} from 'react';
import IconPin from './IconPin.jsx';

export default function ViewItems({view, groups, setGroups, items, setItems}) {
	const toggleGroup = (groupIndex) => {
		let groupsCopy = {...groups};
		groupsCopy[groupIndex].isOpen = !groupsCopy[groupIndex].isOpen;
		setGroups(groupsCopy);
		localStorage.setItem('groups', JSON.stringify(groups));
	};
	const toggleItem = (itemId) => {
		let itemsCopy = [...items];
		let thisItem = itemsCopy.filter((item) => item.id === itemId)[0];
		if(thisItem.isPinned) {
			thisItem.isPinned = false;
		} else {
			thisItem.isPinned = true;
			thisItem.quantity = thisItem.quantity ? thisItem.quantity : 1;
		}
		setItems(itemsCopy);
		localStorage.setItem('items', JSON.stringify(items));
	};

	if (view.filter(view => view.id === 'Items')[0].isActive) {
		return (
			<div className="pane items">
				{Object.entries(groups).map(([groupIndex, group]) => (
						<div className={'group ' + (group.isOpen ? 'open' : '')} key={group.id}>
						<h3 onClick={() => { toggleGroup(groupIndex); }}>{group.name}</h3>

							<div className={'item ' + (item.isPinned ? 'active' : '')} id={itemIndex} key={item.id} onClick={() => { toggleItem(item.id); }}>
								{item.isPinned && <IconPin />}
								<img src={'images/' + item.id + '.png'} alt={item.name} loading="lazy" />
								<span>{item.name}</span>
							</div>
						))}

						</div>
					)
				))}

			</div>
		)
	}
}