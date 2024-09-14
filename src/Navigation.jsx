export default function Navigation({items, view, setView}) {
	const clickHandler = (buttonId) => {
		let viewCopy = [...view];
		viewCopy.forEach(button => {
			button.isActive = button.id === buttonId;
		});
		setView(viewCopy);
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
			{view.map((button) => {
				const IconComponent = `${button.icon}`;
				return (
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
				)
			})}
		</div>
	)
}