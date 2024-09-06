export default function ListView({view}) {
	if (view === 'List') {
		return (
			<>
				{/* <div className="pane" id="list-pane">
					<!-- <div id="list-container">
						<div v-for="(item, index) in list" className="list-item">
							<div className="controls">
								<button v-on:click="removeFromList(index)" aria-label="Remove" title="Remove">
									<svg viewBox="0 0 77.79 45.1">
											"Eye" by Poups, FR: https://thenounproject.com/term/eye/3350406/ 
										<path d="M77.29,22.68a44.82,44.82,0,0,0-76.74-2L0,21.54l.5.88a44.92,44.92,0,0,0,39,22.68A44.66,44.66,0,0,0,77.25,24.4l.54-.85ZM39.47,41.76A41.55,41.55,0,0,1,3.92,21.64a41.48,41.48,0,0,1,70,1.81A41.29,41.29,0,0,1,39.47,41.76Z"></path>
										<path d="M38.9,10.53a12,12,0,1,0,12,12A12,12,0,0,0,38.9,10.53Zm0,20.7a8.68,8.68,0,1,1,8.67-8.68A8.68,8.68,0,0,1,38.9,31.23Z"></path>
									</svg>
								</button>
								<div v-if="item.recipe" className="quantity-buttons">
									<button v-on:click="changeQuantity('+',index)" aria-label="Increase Quantity" title="Increase Quantity">+</button>
									<button v-on:click="changeQuantity('-',index)" aria-label="Decrease Quantity" title="Decrease Quantity">-</button>
								</div>
							</div>
							<div className="item">
								<img :src="item.name | slug | img_src" />
								<div className="label">
									<span v-if="item.recipe" className="yield">{{ item.recipe.yield }}</span>
									<span>{{ item.name }}</span> 
								</div>
							</div>
							<div className="data">
								<h3 v-if="item.location">Found in:</h3>
								<div v-if="item.location" className="location">
									{{ item.location }}
								</div>
								<h3 v-if="item.recipe">Crafted from:</h3>
								<div v-if="item.recipe" className="recipe">
									<div v-for="ingredient in item.recipe.ingredients" className="ingredient">
										<span className="quantity">{{ ingredient.quantity }}</span>
										<img :src="ingredient.name | slug | img_src" />
										<span className="name">{{ ingredient.name }}</span>
									</div>
								</div>
							</div>
						</div>
					</div> -->
				</div> */}
			</>
		)
	}
}