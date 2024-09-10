export default function ListView({items, setItems, view}) {
	const remove = (groupKey, itemKey) => {
		return () => {
			let itemsCopy = {...items};
			itemsCopy[groupKey].items[itemKey].isActive = false;
			setItems(itemsCopy);
		};
	};
	const increment = (groupKey, itemKey) => {
		return () => {
			let itemsCopy = {...items};
			itemsCopy[groupKey].items[itemKey].quantity = itemsCopy[groupKey].items[itemKey].quantity + 1;
			setItems(itemsCopy);
		};
	};
	const decrement = (groupKey, itemKey) => {
		return () => {
			let itemsCopy = {...items};
			if(itemsCopy[groupKey].items[itemKey].quantity === 1) {
				itemsCopy[groupKey].items[itemKey].isActive = false;
			}
			itemsCopy[groupKey].items[itemKey].quantity = itemsCopy[groupKey].items[itemKey].quantity - 1;
			setItems(itemsCopy);
		};
	};

	if (view === 'List') {
		return (
			<>
				<div className="pane" id="list-pane">
					<div id="list-container">
						{Object.entries(items).map(([groupKey, groupValue]) => (
							Object.entries(groupValue.items).filter(([itemKey, itemValue]) => itemValue.isActive).map(([itemKey, itemValue]) => (
								<div className='list-item' key={itemKey}>
									<div className="controls">
										<button onClick={remove(groupKey, itemKey)} aria-label="Remove" title="Remove">
											<svg viewBox="0 0 77.79 45.1">
													"Eye" by Poups, FR: https://thenounproject.com/term/eye/3350406/ 
												<path d="M77.29,22.68a44.82,44.82,0,0,0-76.74-2L0,21.54l.5.88a44.92,44.92,0,0,0,39,22.68A44.66,44.66,0,0,0,77.25,24.4l.54-.85ZM39.47,41.76A41.55,41.55,0,0,1,3.92,21.64a41.48,41.48,0,0,1,70,1.81A41.29,41.29,0,0,1,39.47,41.76Z"></path>
												<path d="M38.9,10.53a12,12,0,1,0,12,12A12,12,0,0,0,38.9,10.53Zm0,20.7a8.68,8.68,0,1,1,8.67-8.68A8.68,8.68,0,0,1,38.9,31.23Z"></path>
											</svg>
										</button>
										{itemValue.hasOwnProperty('recipe') && <div className="quantity-buttons">
											<button onClick={increment(groupKey, itemKey)} aria-label="Increase Quantity" title="Increase Quantity">+</button>
											{/* <span>{itemValue.quantity}</span> */}
											<button onClick={decrement(groupKey, itemKey)} aria-label="Decrease Quantity" title="Decrease Quantity">-</button>
										</div>}
									</div>
									<div className="item">
										<img src={'/images/' + itemKey + '.png'} />
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
													<img src={'/images/' + ingredient.id + '.png'} />
													<span className="name">{ingredient.name}</span>
												</div>
											))}
										</div>
									</div>}
								</div>
							))
						))}

					</div>
				</div>
			</>
		)
	}
}