import {useState} from 'react';
import IconPin from './IconPin.jsx';
import IconSearch from './IconSearch.jsx';
import IconClear from './IconClear.jsx';

export default function ViewItems({view, groups, setGroups, items, setItems}) {
	const [search, setSearch] = useState('');
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
	const handleSearchChange = (e) => { 
		const searchTerm = e.target.value;
		setSearch(searchTerm);
	}
	const clearSearch = () => {
		setSearch('');
	}

	if (view.filter(view => view.id === 'Items')[0].isActive) {
		return (
			<div className="pane items">
				<div className="filter">
					<div className="search-icon"><IconSearch /></div>
					{search && <button className="search-clear" onClick={clearSearch}><IconClear /></button>}
					<input className="search-input" type="text" placeholder="Start typing to filter items" value={search} onChange={handleSearchChange} />
				</div>

				{Object.entries(groups).map(([groupIndex, group]) => (
					(Object.entries(items).filter(([itemIndex, item]) => item.group === group.name && item.name.toLowerCase().includes(search.toLowerCase())).length > 0) && (
						<div className={'group ' + (group.isOpen ? 'open' : '')} key={group.id}>
						<h3 onClick={() => { toggleGroup(groupIndex); }}>{group.name}</h3>

						{Object.entries(items).filter(([itemIndex, item]) => item.group === group.name && item.name.toLowerCase().includes(search.toLowerCase())).map(([itemIndex, item]) => (
							<div className={'item ' + (item.isPinned ? 'active' : '')} id={itemIndex} key={item.id} onClick={() => { toggleItem(item.id); }}>
								{item.isPinned && <IconPin />}
								<img src={'images/items/' + item.id + '.png'} alt={item.name} loading="lazy" />
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