export default function ListView({items, setItems, view}) {
	if (view === 'List') {
		return (
			<>
				<div className="pane" id="list-pane">
					<div id="list-container">
						{items.map((group) => (
							group.items.filter(item => item.isActive).map((item) => (
								<div className='list-item' key={item.id}>
									<div className="controls">
										<button v-on:click="removeFromList(index)" aria-label="Remove" title="Remove">
											<svg viewBox="0 0 77.79 45.1">
													"Eye" by Poups, FR: https://thenounproject.com/term/eye/3350406/ 
												<path d="M77.29,22.68a44.82,44.82,0,0,0-76.74-2L0,21.54l.5.88a44.92,44.92,0,0,0,39,22.68A44.66,44.66,0,0,0,77.25,24.4l.54-.85ZM39.47,41.76A41.55,41.55,0,0,1,3.92,21.64a41.48,41.48,0,0,1,70,1.81A41.29,41.29,0,0,1,39.47,41.76Z"></path>
												<path d="M38.9,10.53a12,12,0,1,0,12,12A12,12,0,0,0,38.9,10.53Zm0,20.7a8.68,8.68,0,1,1,8.67-8.68A8.68,8.68,0,0,1,38.9,31.23Z"></path>
											</svg>
										</button>
										{item.hasOwnProperty('recipe') && <div className="quantity-buttons">
											<button v-on:click="changeQuantity('+',index)" aria-label="Increase Quantity" title="Increase Quantity">+</button>
											<button v-on:click="changeQuantity('-',index)" aria-label="Decrease Quantity" title="Decrease Quantity">-</button>
										</div>}
									</div>
									<div className="item">
										<img src={'./src/assets/images/' + item.id + '.png'} />
										<div className="label">
											{item.hasOwnProperty('recipe') && <span className="yield">{ item.recipe.yield }</span>}
											<span>{ item.name }</span> 
										</div>
									</div>
									{item.hasOwnProperty('location') && <div className="data"><h3>Found in:</h3><div className="location">{ item.location }</div></div>}
									{item.hasOwnProperty('recipe') && 
									<div className="data">
										<h3>Crafted from:</h3>
										<div className="recipe">
										{item.recipe.ingredients.map((ingredient) => (
												<div className="ingredient" key={ingredient.id}>
													<span className="quantity">{ ingredient.quantity }</span>
													<img src={'./src/assets/images/' + ingredient.id + '.png'} />
													<span className="name">{ ingredient.name }</span>
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