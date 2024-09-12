import { useState } from 'react';
import IconPin from './IconPin.jsx';
import IconDocument from './IconDocument.jsx';
import IconWrench from './IconWrench.jsx';
import IconHelp from './IconHelp.jsx';

export default function Navigation({items, view, setView}) {
	const navButtons = [
		{ id: 'Pinned', isActive: false, icon: <IconPin /> },
		{ id: 'Items', isActive: false, icon: <IconWrench /> },
		{ id: 'Notes', isActive: false, icon: <IconDocument /> },
		{ id: 'Help', isActive: false, icon: <IconHelp /> },
	];
	const [buttons, setButtons] = useState(navButtons);
	const clickHandler = (buttonId) => {
		let buttonsCopy = [...buttons];
		buttonsCopy.forEach(button => {
			button.isActive = button.id === buttonId;
		});
		setButtons(buttonsCopy);
		setView(buttonId);
		localStorage.setItem('view', buttonId);
	};
	const pinnedItems = Object.entries(items)
		.map(([groupKey, groupValue]) => (
			Object.values(groupValue.items)
				.filter(item => item.isPinned)
		))
		.filter(count => count.length > 0).flat().length;
	
	return (
		<div id="tabs">
			{buttons.map((button) => (
				<button 
					className={button.isActive ? 'active tab' : 'tab'} 
					aria-label={button.id} 
					title={button.id} 
					key={button.id} 
					onClick={() => {
						clickHandler(button.id);
					}}
				>
					{button.icon}
					{button.id === 'Pinned' && pinnedItems > 0 && <span className="badge">{pinnedItems}</span>}
					<span className="label">{button.id}</span>
				</button>
			))}
		</div>
	)
}