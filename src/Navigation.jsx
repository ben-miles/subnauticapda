import { useState } from 'react';
import IconPin from './IconPin.jsx';
import IconDocument from './IconDocument.jsx';
import IconWrench from './IconWrench.jsx';
import IconHelp from './IconHelp.jsx';

const navButtons = [
	{ id: 0, isActive: false, label: 'Pinned', icon: <IconPin /> },
	{ id: 1, isActive: false, label: 'Items', icon: <IconWrench /> },
	{ id: 2, isActive: false, label: 'Notes', icon: <IconDocument /> },
	{ id: 3, isActive: true, label: 'Help', icon: <IconHelp /> },
  ];

export default function Navigation({items, setView}) {
	const [buttons, setButtons] = useState(navButtons);
	const clickHandler = (label) => {
		setView(label);
		setButtons(buttons.map(button => ({
			...button,
			isActive: button.label === label
		})));
	};
	const pinnedItems = Object.entries(items)
	.map(([groupKey, groupValue]) => (
		Object.values(groupValue.items).filter(item => item.isPinned)
	))
	.filter(count => count.length > 0).flat().length;
	
	return (
		<>
			<div id="tabs">
				{buttons.map((button) => (
					<button 
						className={button.isActive ? 'active tab' : 'tab'} 
						aria-label={button.label} 
						title={button.label} 
						key={button.id} 
						onClick={() => {
							clickHandler(button.label);
						}}
					>
						{button.icon}
						{button.label === 'Pinned' && pinnedItems > 0 && <span className="badge">{pinnedItems}</span>}
						<span className="label">{button.label}</span>
					</button>
				))}
			</div>
		</>
	)
}