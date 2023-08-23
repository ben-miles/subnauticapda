<script>
import { RouterLink } from 'vue-router'
// import IconTranslator from '../components/icons/IconTranslator.vue';
// import IconItems from '../components/icons/IconItems.vue'

export default {
	components: { 
		// IconTranslator,
		// IconItems 
	}
}
</script>

<template>

	<!-- HEADING -->
	<div id="heading">
		<h2>List</h2>
	</div>

	<!-- PANES -->
	<div id="panes">

		<div class="pane" id="list-pane">
			<!-- <div id="list-container">
				<div v-if="list.length === 0" class="welcome">
					<div id="spoiler">
							"Alert" by Gautam Arora, IN: https://thenounproject.com/term/alert/574450/ 
						<svg viewBox="0 0 12 12">
							<path d="M10.447693,11.402344H1.553162c-0.561523,0-1.063477-0.290039-1.34375-0.776367    c-0.280273-0.485352-0.280273-1.06543,0.000977-1.550781l4.447266-7.702148C4.936951,0.887695,5.43988,0.597656,6.000427,0.597656    s1.063477,0.290039,1.34375,0.775391l4.446289,7.702148c0.280273,0.486328,0.280273,1.066406,0,1.551758    S11.00824,11.402344,10.447693,11.402344z M6.000427,1.597656c-0.095703,0-0.333984,0.026367-0.476562,0.275391L1.075623,9.575195    c-0.143555,0.249023-0.047852,0.46875,0,0.551758s0.19043,0.275391,0.477539,0.275391h8.894531    c0.287109,0,0.428711-0.192383,0.476562-0.275391s0.144531-0.302734,0-0.551758L6.477966,1.873047    C6.334412,1.624023,6.09613,1.597656,6.000427,1.597656z"></path>
							<path d="M6.085388,7.578125c-0.276367,0-0.5-0.223633-0.5-0.5v-2.75293c0-0.276367,0.223633-0.5,0.5-0.5    s0.5,0.223633,0.5,0.5v2.75293C6.585388,7.354492,6.361755,7.578125,6.085388,7.578125z"></path>
							<circle cx="6.085185" cy="8.744164" r="0.6"></circle>
						</svg>
						<span><b>Spoiler Alert!</b> If you have not yet completed <i>Subnautica</i>, you <b>will</b> encounter spoilers using this app.</span>
							"Alert" by Gautam Arora, IN: https://thenounproject.com/term/alert/574450/ 
						<svg viewBox="0 0 12 12">
							<path d="M10.447693,11.402344H1.553162c-0.561523,0-1.063477-0.290039-1.34375-0.776367    c-0.280273-0.485352-0.280273-1.06543,0.000977-1.550781l4.447266-7.702148C4.936951,0.887695,5.43988,0.597656,6.000427,0.597656    s1.063477,0.290039,1.34375,0.775391l4.446289,7.702148c0.280273,0.486328,0.280273,1.066406,0,1.551758    S11.00824,11.402344,10.447693,11.402344z M6.000427,1.597656c-0.095703,0-0.333984,0.026367-0.476562,0.275391L1.075623,9.575195    c-0.143555,0.249023-0.047852,0.46875,0,0.551758s0.19043,0.275391,0.477539,0.275391h8.894531    c0.287109,0,0.428711-0.192383,0.476562-0.275391s0.144531-0.302734,0-0.551758L6.477966,1.873047    C6.334412,1.624023,6.09613,1.597656,6.000427,1.597656z"></path>
							<path d="M6.085388,7.578125c-0.276367,0-0.5-0.223633-0.5-0.5v-2.75293c0-0.276367,0.223633-0.5,0.5-0.5    s0.5,0.223633,0.5,0.5v2.75293C6.585388,7.354492,6.361755,7.578125,6.085388,7.578125z"></path>
							<circle cx="6.085185" cy="8.744164" r="0.6"></circle>
						</svg>
					</div>
					<h1>Welcome aboard, Captain.</h1>
					<p><b>Subnautica PDA</b> is a second-screen companion app for the game <a href="https://subnautica.com/" target="_blank" title="Subnautica Official Site"><i>Subnautica</i></a>. It was made to assist with crafting recipes and other helpful reminders. It is best used on a phone or tablet, while playing the game on PC or console.</p>
					<p>To use <b>Subnautica PDA</b>: Click the <b>wrench</b> icon for a complete list of blueprints. Click a category to see the items in that category, and click on an item to add it to your personal List. Those items will appear here, in place of this welcome message. To get back to this message, just clear out your List, by clicking the <b>eye</b> next to each item. To keep any other miscellaneous reminders, use the Notes view by clicking the <b>note</b> icon. All of your items and notes will be saved if you leave the app and return later.</p>
					<p>This app uses material from the <a href="https://subnautica.fandom.com/wiki/Subnautica_Wiki" target="_blank">Subnautica Wiki</a> at <a href="https://www.fandom.com/" target="_blank">Fandom</a> and is licensed under the <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons Attribution-Share Alike License</a>.</p>
				</div>
				<div v-for="(item, index) in list" class="list-item">
					<div class="controls">
						<button v-on:click="removeFromList(index)" aria-label="Remove" title="Remove">
							<svg viewBox="0 0 77.79 45.1">
									"Eye" by Poups, FR: https://thenounproject.com/term/eye/3350406/ 
								<path d="M77.29,22.68a44.82,44.82,0,0,0-76.74-2L0,21.54l.5.88a44.92,44.92,0,0,0,39,22.68A44.66,44.66,0,0,0,77.25,24.4l.54-.85ZM39.47,41.76A41.55,41.55,0,0,1,3.92,21.64a41.48,41.48,0,0,1,70,1.81A41.29,41.29,0,0,1,39.47,41.76Z"></path>
								<path d="M38.9,10.53a12,12,0,1,0,12,12A12,12,0,0,0,38.9,10.53Zm0,20.7a8.68,8.68,0,1,1,8.67-8.68A8.68,8.68,0,0,1,38.9,31.23Z"></path>
							</svg>
						</button>
						<div v-if="item.recipe" class="quantity-buttons">
							<button v-on:click="changeQuantity('+',index)" aria-label="Increase Quantity" title="Increase Quantity">+</button>
							<button v-on:click="changeQuantity('-',index)" aria-label="Decrease Quantity" title="Decrease Quantity">-</button>
						</div>
					</div>
					<div class="item">
						<img :src="item.name | slug | img_src" />
						<div class="label">
							<span v-if="item.recipe" class="yield">{{ item.recipe.yield }}</span>
							<span>{{ item.name }}</span> 
						</div>
					</div>
					<div class="data">
						<h3 v-if="item.location">Found in:</h3>
						<div v-if="item.location" class="location">
							{{ item.location }}
						</div>
						<h3 v-if="item.recipe">Crafted from:</h3>
						<div v-if="item.recipe" class="recipe">
							<div v-for="ingredient in item.recipe.ingredients" class="ingredient">
								<span class="quantity">{{ ingredient.quantity }}</span>
								<img :src="ingredient.name | slug | img_src" />
								<span class="name">{{ ingredient.name }}</span>
							</div>
						</div>
					</div>
				</div>
			</div> -->
		</div>

	</div>

</template>

<style>
.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: rgba(26, 102, 172, 0.1);
  border: 1px solid rgba(200, 234, 246, 0.6);
  box-shadow: inset 0 0 5px rgba(200, 234, 246, 0.5);
  padding: 10px;
  margin-bottom: 10px; }
  .list-item .controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px; }
    .list-item .controls .quantity-buttons {
      display: flex;
      flex-direction: row; }
      .list-item .controls .quantity-buttons button {
        border-radius: 5px 0 0 5px;
        color: #85bedc;
        font-weight: bold;
        display: inline;
        margin: 0;
        text-shadow: 0 0 3px #1d67a4; }
        .list-item .controls .quantity-buttons button:last-of-type {
          border-radius: 0 5px 5px 0; }
    .list-item .controls button {
      background: rgba(26, 102, 172, 0.1);
      border: 1px solid rgba(200, 234, 246, 0.6);
      border-radius: 10px;
      box-shadow: inset 0 0 15px rgba(200, 234, 246, 0.5);
      margin-bottom: 15px;
      outline: none;
      padding: 10px 4px; }
      .list-item .controls button svg {
        width: 40px;
        fill: #85bedc;
        filter: drop-shadow(0 0 3px #1d67a4); }
        @media (min-width: 1024px) {
          .list-item .controls button svg {
            width: 30px; } }
      .list-item .controls button:hover svg {
        fill: red; }
  .list-item .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    width: 90px; }
    .list-item .item .label {
      text-align: center; }
    .list-item .item img {
      width: 100%;
      margin-bottom: 10px; }
    .list-item .item span {
      font-weight: 600;
      text-align: center;
      line-height: normal; }
  .list-item .data {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%; }
    .list-item .data h3 {
      background: rgba(26, 102, 172, 0.6);
      border: 1px solid rgba(200, 234, 246, 0.6);
      box-shadow: inset 0 0 5px rgba(200, 234, 246, 0.5);
      font-size: .9em;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
      padding: 3px 0 3px 10px;
      width: 100%; }
      .list-item .data h3:before {
        content: "⌵";
        margin-right: 10px;
        transform: rotate(0deg);
        display: inline-block; }
      .list-item .data h3:not(:first-of-type) {
        margin-top: 10px; }
  .list-item .location,
  .list-item .recipe {
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 10px; }
  .list-item .quantity, .list-item .yield {
    background: #ffd003;
    color: #7a3e00;
    border-radius: 15px;
    text-align: center;
    padding: 4px;
    box-shadow: 0 0 10px #8a512d, 0 0 5px #8a512d; }
  .list-item .ingredient {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 15px;
    margin-right: 15px;
    margin-bottom: 5px;
    position: relative; }
    .list-item .ingredient:after {
      display: block;
      content: "+";
      position: absolute;
      right: -20px;
      top: calc( 50% - 13px);
      margin-right: 15px; }
    .list-item .ingredient:last-child:after {
      content: ""; }
    .list-item .ingredient .quantity {
      font-weight: bold;
      margin-right: 10px; }
    .list-item .ingredient img {
      margin-right: 5px;
      width: 30px; }
</style>