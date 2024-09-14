import IconEye from './IconEye.jsx';

export default function ViewPinned({items, setItems, view}) {
	const remove = (groupKey, itemKey) => {
		return () => {
			let itemsCopy = {...items};
			itemsCopy[groupKey].items[itemKey].isPinned = false;
			setItems(itemsCopy);
			localStorage.setItem('items', JSON.stringify(items));
		};
	};
	const increment = (groupKey, itemKey) => {
		return () => {
			let itemsCopy = {...items};
			itemsCopy[groupKey].items[itemKey].quantity = itemsCopy[groupKey].items[itemKey].quantity + 1;
			setItems(itemsCopy);
			localStorage.setItem('items', JSON.stringify(items));
		};
	};
	const decrement = (groupKey, itemKey) => {
		return () => {
			let itemsCopy = {...items};
			if(itemsCopy[groupKey].items[itemKey].quantity === 1) {
				itemsCopy[groupKey].items[itemKey].isPinned = false;
			}
			itemsCopy[groupKey].items[itemKey].quantity = itemsCopy[groupKey].items[itemKey].quantity - 1;
			setItems(itemsCopy);
			localStorage.setItem('items', JSON.stringify(items));
		};
	};

	if (view.filter(view => view.id === 'Pinned')[0].isActive) {
		// if there are no pinned items, display a message
		if (!Object.entries(items).some(([groupKey, groupValue]) => Object.entries(groupValue.items).some(([itemKey, itemValue]) => itemValue.isPinned)) ) {
			return (
				<div className="pane pinned">
					<div className='pinned-item'>
						<p className>No pinned items</p>
					</div>
				</div>
			)
		} else {
			return (
				<div className="pane pinned">
					{Object.entries(items).map(([groupKey, groupValue]) => (
						Object.entries(groupValue.items).filter(([itemKey, itemValue]) => itemValue.isPinned).map(([itemKey, itemValue]) => (
							<div className='pinned-item' key={itemKey}>
								<div className="controls">
									<button onClick={remove(groupKey, itemKey)} aria-label="Remove" title="Remove">
										<IconEye />
									</button>
									{itemValue.hasOwnProperty('recipe') && <div className="quantity-buttons">
										<button onClick={increment(groupKey, itemKey)} aria-label="Increase Quantity" title="Increase Quantity">+</button>
										{/* <span>{itemValue.quantity}</span> */}
										<button onClick={decrement(groupKey, itemKey)} aria-label="Decrease Quantity" title="Decrease Quantity">-</button>
									</div>}
								</div>
								<div className="item">
									<img src={'images/' + itemKey + '.png'} alt={itemValue.name} loading="lazy" />
									<div className="label">
										{itemValue.hasOwnProperty('recipe') && <span className="yield">{ (itemValue.quantity * itemValue.recipe.yield) }</span>}
										<span>{ itemValue.name }</span> 
									</div>
								</div>
								{itemValue.hasOwnProperty('location') && <div className="data"><h3>Found in:</h3><div className="location">{ itemValue.location }</div></div>}
								{itemValue.hasOwnProperty('recipe') && 
								<div className="data">
									<h3>Crafted from:</h3>
									<div className="recipe">
									{itemValue.recipe.ingredients.map((ingredient) => (
											<div className="ingredient" key={ingredient.id}>
												<span className="quantity">{ (itemValue.quantity * ingredient.quantity) }</span>
												<img src={'images/' + ingredient.id + '.png'} alt={ingredient.name} loading="lazy" />
												<span className="name">{ingredient.name}</span>
											</div>
										))}
									</div>
								</div>}
							</div>
						))
					))}
				</div>
			)
		}
	}
}