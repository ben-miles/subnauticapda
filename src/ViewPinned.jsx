import IconEye from './IconEye.jsx';
import IconAlert from './IconAlert.jsx';

export default function ViewPinned({items, setItems, view}) {
	const remove = (itemId) => {
		return () => {
			let itemsCopy = [...items];
			let thisItem = itemsCopy.filter((item) => item.id === itemId)[0];
			thisItem.isPinned = false;
			setItems(itemsCopy);
			localStorage.setItem('items', JSON.stringify(items));
		};
	};
	const increment = (itemId) => {
		return () => {
			let itemsCopy = [...items];
			let thisItem = itemsCopy.filter((item) => item.id === itemId)[0];
			thisItem.quantity++;
			setItems(itemsCopy);
			localStorage.setItem('items', JSON.stringify(items));
		};
	};
	const decrement = (itemId) => {
		return () => {
			let itemsCopy = [...items];
			let thisItem = itemsCopy.filter((item) => item.id === itemId)[0];
			if(thisItem.quantity === 1) {
				thisItem.isPinned = false;
			}
			thisItem.quantity--;
			setItems(itemsCopy);
			localStorage.setItem('items', JSON.stringify(items));
		};
	};

	if (view.filter(view => view.id === 'Pinned')[0].isActive) {
		// if there are no pinned items, display a message
		if (!items.some(item => item.isPinned)) {
			return (
				<div className="pane pinned">
					<div className="content">
						<div className="alert" id="no-pins">
							<div className="icon">
								<IconAlert />
							</div>
							<div className="text">
								<span><b>No Pinned Items.</b> Go to <b>Items</b> and click to pin their recipes here.</span>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="pane pinned">
					
					{Object.entries(items).filter(([itemIndex, item]) => item.isPinned).map(([itemIndex, item]) => (
						<div className='pinned-item' key={item.id}>
							<div className="controls">
								<button onClick={remove(item.id)} aria-label="Remove" title="Remove">
									<IconEye />
								</button>
								
								<div className="quantity-buttons">
									<button onClick={increment(item.id)} aria-label="Increase Quantity" title="Increase Quantity">+</button>
									<span>{(item.quantity * ( item.hasOwnProperty('recipe') ? item.recipe.yield : 1 ) )}</span>
									<button onClick={decrement(item.id)} aria-label="Decrease Quantity" title="Decrease Quantity">-</button>
								</div>

							</div>
							<div className="item">
								<img src={'images/items/' + item.id + '.png'} alt={item.name} loading="lazy" />
								<span className="name">{item.name}</span> 
							</div>
							
							{item.hasOwnProperty('location') && 
								<div className="data">
									<h3>Found in:</h3>
									<div className="location">{ item.location }</div>
								</div>
							}
							
							{item.hasOwnProperty('recipe') && 
								<div className="data">
									<h3>Crafted from:</h3>
									<div className="recipe">

									{item.recipe.ingredients.map((ingredient) => (
										<div className="ingredient" key={ingredient.id}>
											<span className="quantity">{(item.quantity * ingredient.quantity)}</span>
											<img src={'images/items/' + ingredient.id + '.png'} alt={ingredient.name} loading="lazy" />
											<span className="name">{ingredient.name}</span>
										</div>
									))}

									</div>
								</div>
							}
							
						</div>
					))}

				</div>
			)
		}
	}
}