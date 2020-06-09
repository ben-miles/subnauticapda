<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>title</title>
  <meta name="description" content="description">
  <meta name="author" content="author">
  <script src="/js/vue.js"></script>
  <style>
  @charset "UTF-8";
/*** FONTS ***/
@import url(//fonts.googleapis.com/css2?family=Days+One&family=Ubuntu&display=swap);
body {
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
}

/*** RESET ***/
*, *:before, :after {
  box-sizing: border-box;
  transition: all 0.2s linear;
}

body, html {
  height: 100%;
}

body, html, a, button {
  cursor: pointer;
  cursor: url(//bcgm3.com/dev/subnauticapda/subnauticapda_cursor.svg), pointer;
}

/*** VARIABLES ***/
#app {
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
}

#title {
  background: -webkit-linear-gradient(#7fc8d7, #eee);
  font-family: "Days One", sans-serif;
  font-size: 7vw;
  margin: 10px auto;
  position: relative;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#title:after {
  content: "SUBNAUTICA PDA";
  -webkit-background-clip: text;
  -webkit-text-fill-color: #000;
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: -1;
  white-space: nowrap;
}
#title:before {
  content: "SUBNAUTICA PDA";
  -webkit-background-clip: text;
  -webkit-text-fill-color: #fff;
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: -1;
  white-space: nowrap;
}
@media (min-width: 1024px) {
  #title {
    font-size: 3.5em;
    margin: 20px auto;
  }
}
#title span {
  -webkit-text-fill-color: #f28d00;
}

#bkg {
  background-image: url(//bcgm3.com/dev/subnauticapda/subnauticapda_bkg.jpg);
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  height: 104%;
  width: 104%;
  position: absolute;
  top: -2%;
  left: -2%;
  z-index: -100;
}

#pda {
  background: url(//bcgm3.com/dev/subnauticapda/subnauticapda_pda_sm.png);
  background-repeat: repeat-x;
  background-size: contain;
  height: calc(100vh - 7vw - 20px);
  padding: 50px 0;
  width: 100%;
}
@media (min-width: 1024px) {
  #pda {
    background: url(//bcgm3.com/dev/subnauticapda/subnauticapda_pda_lg.png);
    background-position: 84.5% 0%;
    background-size: cover;
    height: 648px;
    width: 900px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
  }
}
@media (min-width: 1280px) {
  #pda {
    height: 720px;
    width: 1000px;
  }
}
@media (min-width: 1650px) {
  #pda {
    height: 864px;
    width: 1200px;
  }
}

.welcome {
  border: 2px solid #c8eaf6;
  border-radius: 7px;
  box-shadow: inset 0 0 10px #c8eaf6;
  color: #e0f4ff;
  padding: 10px;
}
.welcome a {
  color: #fff;
}
.welcome a:visited {
  color: #fff;
}
.welcome a:hover {
  color: #7fc8d7;
}
.welcome b {
  font-weight: bold;
}
.welcome i {
  font-style: italic;
}
.welcome h1 {
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
}
.welcome #spoiler {
  background: red;
  border-radius: 10px;
  color: #fff;
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
}
.welcome #spoiler svg {
  fill: #fff;
  width: 70px;
}

#screen {
  color: #fff;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  #screen {
    border-radius: 40px;
    height: 75%;
    padding: 2.5% 1.75%;
    position: relative;
    left: 27.5%;
    width: 67%;
    top: 13%;
  }
}

#tabs {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#tabs .tab {
  background: transparent;
  border: 2px solid #c8eaf6;
  border-radius: 7px;
  box-shadow: inset 0 0 10px #c8eaf6;
  color: #e0f4ff;
  margin: 0 2px;
  outline: 0;
  padding: 2px 30px;
  transform: skew(-20deg);
}
#tabs .tab:after {
  background: transparent;
  height: 2px;
  content: "";
  display: block;
  left: 50%;
  position: relative;
  top: 10px;
  width: 10px;
}
#tabs .tab:hover, #tabs .tab.active {
  background: #114cbf;
}
#tabs .tab:hover svg {
  fill: #fff;
}
#tabs .tab.active:after {
  background: #f3feff;
  box-shadow: 0 0 5px #2f5cb3, 0 0 5px #2f5cb3;
}
#tabs .tab div, #tabs .tab svg {
  transform: skew(20deg) !important;
}
#tabs .tab svg {
  fill: url(#gradient) #fff;
  width: 25px;
  position: relative;
  top: 2px;
  filter: drop-shadow(0 0 3px #1d67a4);
}

#heading h2 {
  border-bottom: 2px solid #dabc3e;
  color: #50bbcc;
  font-weight: 600;
  margin: 10px auto;
  padding-bottom: 5px;
  text-align: center;
  text-transform: uppercase;
  width: 100px;
}

#panes {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;
  line-height: 1.5;
}
#panes .pane {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
}
#panes .pane textarea {
  background: transparent;
  border: 2px solid #c8eaf6;
  border-radius: 7px;
  box-shadow: inset 0 0 10px #c8eaf6;
  color: #e0f4ff;
  height: 100%;
  margin: 0;
  outline: none;
  padding: 10px;
  resize: none;
  width: 100%;
}
#panes p {
  margin-bottom: 1em;
}
#panes::-webkit-scrollbar {
  background: transparent;
  width: 25px;
}
#panes::-webkit-scrollbar-track {
  border: 2px solid rgba(150, 150, 150, 0.5);
  border-radius: 3px;
}
#panes::-webkit-scrollbar-thumb {
  background: #3976c6;
  border: 2px solid #c8eaf6;
  border-radius: 5px;
  box-shadow: inset 0 0 15px #c8eaf6;
}
#panes::-webkit-scrollbar-thumb:hover {
  background: #114cbf;
}

.group {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: flex-start;
  margin-bottom: 20px;
  overflow: hidden;
}
.group.collapsed {
  height: 30px;
  margin-bottom: 5px;
}
.group.collapsed h3:before {
  transform: rotate(-90deg);
}
.group h3 {
  background: rgba(26, 102, 172, 0.6);
  border: 1px solid rgba(200, 234, 246, 0.6);
  box-shadow: inset 0 0 5px rgba(200, 234, 246, 0.5);
  font-size: .9em;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  padding: 3px 0 3px 10px;
  width: 100%;
}
.group h3:before {
  content: "⌵";
  margin-right: 10px;
  transform: rotate(0deg);
  display: inline-block;
}
.group .item {
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 5px;
  width: calc( 33.3% - 10px );
}
@media (min-width: 500px) {
  .group .item {
    width: calc( 25% - 10px );
  }
}
@media (min-width: 768px) {
  .group .item {
    width: calc( 16.6% - 10px );
  }
}
.group .item img {
  width: 100%;
}
.group .item span {
  display: block;
  font-size: .8em;
  line-height: 1;
  text-align: center;
}
.group .item:hover {
  background: #114cbf;
}

.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: rgba(26, 102, 172, 0.1);
  border: 1px solid rgba(200, 234, 246, 0.6);
  box-shadow: inset 0 0 5px rgba(200, 234, 246, 0.5);
  padding: 10px;
  margin-bottom: 10px;
}
.list-item .controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.list-item .controls .quantity-buttons {
  display: flex;
  flex-direction: row;
}
.list-item .controls .quantity-buttons button {
  border-radius: 5px 0 0 5px;
  color: #85bedc;
  font-weight: bold;
  display: inline;
  margin: 0;
  text-shadow: 0 0 3px #1d67a4;
  width: 20px;
}
.list-item .controls .quantity-buttons button:last-of-type {
  border-radius: 0 5px 5px 0;
}
.list-item .controls button {
  background: rgba(26, 102, 172, 0.1);
  border: 1px solid rgba(200, 234, 246, 0.6);
  border-radius: 10px;
  box-shadow: inset 0 0 15px rgba(200, 234, 246, 0.5);
  margin-bottom: 15px;
  outline: none;
  padding: 10px 4px;
}
.list-item .controls button svg {
  width: 40px;
  fill: #85bedc;
  filter: drop-shadow(0 0 3px #1d67a4);
}
@media (min-width: 1024px) {
  .list-item .controls button svg {
    width: 30px;
  }
}
.list-item .controls button:hover svg {
  fill: red;
}
.list-item .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  width: 90px;
}
.list-item .item .label {
  text-align: center;
}
.list-item .item img {
  width: 100%;
  margin-bottom: 10px;
}
.list-item .item span {
  font-weight: 600;
  text-align: center;
  line-height: normal;
}
.list-item .data {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}
.list-item .data h3 {
  background: rgba(26, 102, 172, 0.6);
  border: 1px solid rgba(200, 234, 246, 0.6);
  box-shadow: inset 0 0 5px rgba(200, 234, 246, 0.5);
  font-size: .9em;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  padding: 3px 0 3px 10px;
  width: 100%;
}
.list-item .data h3:before {
  content: "⌵";
  margin-right: 10px;
  transform: rotate(0deg);
  display: inline-block;
}
.list-item .data h3:not(:first-of-type) {
  margin-top: 10px;
}
.list-item .location,
.list-item .recipe {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 10px;
}
.list-item .quantity, .list-item .yield {
  background: #ffd003;
  color: #7a3e00;
  border-radius: 15px;
  text-align: center;
  padding: 4px;
  box-shadow: 0 0 10px #8a512d, 0 0 5px #8a512d;
}
.list-item .ingredient {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 15px;
  margin-right: 15px;
  margin-bottom: 5px;
  position: relative;
}
.list-item .ingredient:after {
  display: block;
  content: "+";
  position: absolute;
  right: -20px;
  top: calc( 50% - 13px );
  margin-right: 15px;
}
.list-item .ingredient:last-child:after {
  content: "";
}
.list-item .ingredient .quantity {
  font-weight: bold;
  margin-right: 10px;
}
.list-item .ingredient img {
  margin-right: 5px;
  width: 30px;
}

  </style>
  <!-- <link rel="stylesheet" href="css/styles.css?v=1.0"> -->

</head>

<body>
<div id="app">
	<h1 id="title"><span>SUB</span>NAUTICA PDA</h1>
	<div id="pda">
		<div id="screen">
			<div id="tabs">
				<button class="tab active" id="list" aria-label="List" title="List" v-on:click="loadPane('list')">
					<svg viewBox="0 0 36 34">
						<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="18" y1="2.9648" x2="18" y2="30.6665">
							<stop offset="0" style="stop-color:#F3F9FD"/>
							<stop offset="1" style="stop-color:#79D1F6"/>
						</linearGradient>
						<path d="M19,5.951v17.716h-2V5.951C13.646,2.734,2.895,2.147,1,4.042v22.625c6.5,0,12.438-0.563,17,4
		c4.563-4.563,10.5-4,17-4V4.042C33.105,2.147,22.354,2.734,19,5.951z"/>
					</svg>
				</button>
				<button class="tab" id="items" aria-label="Items" title="Items" v-on:click="loadPane('items')">
					<svg viewBox="0 0 34 34">
						<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="17.2026" y1="1.0273" x2="17.2026" y2="32.7651">
						<stop offset="0" style="stop-color:#F3F9FD"/>
						<stop offset="1" style="stop-color:#79D1F6"/>
					</linearGradient>
						<path d="M8.927,2.374l3.447,3.447c1.725,1.725,1.725,4.522,0,6.247c-1.725,1.725-4.521,1.725-6.246,0
		L2.681,8.621c-2.102,4.176-1.777,8.947,1.209,11.932c2.98,2.98,7.74,3.31,11.912,1.219l10.994,10.994l6.275-6.276L22.077,15.495
		c2.092-4.171,1.763-8.932-1.218-11.913C17.874,0.597,13.104,0.273,8.927,2.374z"/>
					</svg>
				</button>
				<button class="tab" id="notes" aria-label="Notes" title="Notes" v-on:click="loadPane('notes')">
					<svg viewBox="0 0 36 34">
						<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="18" y1="1.6665" x2="18" y2="31.6665">
							<stop offset="0" style="stop-color:#F3F9FD"/>
							<stop offset="1" style="stop-color:#79D1F6"/>
						</linearGradient>
						<path d="M24.817,1.667H1v30h34V11.85L24.817,1.667z M6,6.667h13v2H6V6.667z M6,11.667h13v2H6V11.667z
		 M31,23.667H6v-2h25V23.667z M31,18.667H6v-2h25V18.667z M24,12.667v-7l7,7H24z"/>
					</svg>
				</button>
			</div>
			<div id="heading">
				<h2>List</h2>
			</div>
			<div id="panes">
				<div class="pane" id="list-pane">
					<div id="list-container">
						<div v-if="list.length === 0" class="welcome">
							<div id="spoiler">
								<!-- "Alert" by Gautam Arora, IN: https://thenounproject.com/term/alert/574450/ -->
								<svg viewBox="0 0 12 12">
									<path d="M10.447693,11.402344H1.553162c-0.561523,0-1.063477-0.290039-1.34375-0.776367    c-0.280273-0.485352-0.280273-1.06543,0.000977-1.550781l4.447266-7.702148C4.936951,0.887695,5.43988,0.597656,6.000427,0.597656    s1.063477,0.290039,1.34375,0.775391l4.446289,7.702148c0.280273,0.486328,0.280273,1.066406,0,1.551758    S11.00824,11.402344,10.447693,11.402344z M6.000427,1.597656c-0.095703,0-0.333984,0.026367-0.476562,0.275391L1.075623,9.575195    c-0.143555,0.249023-0.047852,0.46875,0,0.551758s0.19043,0.275391,0.477539,0.275391h8.894531    c0.287109,0,0.428711-0.192383,0.476562-0.275391s0.144531-0.302734,0-0.551758L6.477966,1.873047    C6.334412,1.624023,6.09613,1.597656,6.000427,1.597656z"></path>
									<path d="M6.085388,7.578125c-0.276367,0-0.5-0.223633-0.5-0.5v-2.75293c0-0.276367,0.223633-0.5,0.5-0.5    s0.5,0.223633,0.5,0.5v2.75293C6.585388,7.354492,6.361755,7.578125,6.085388,7.578125z"></path>
									<circle cx="6.085185" cy="8.744164" r="0.6"></circle>
								</svg>
								<span><b>Spoiler Alert!</b> If you have not yet completed <i>Subnautica</i>, you <b>will</b> encounter spoilers using this app.</span>
								<!-- "Alert" by Gautam Arora, IN: https://thenounproject.com/term/alert/574450/ -->
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
										<!-- "Eye" by Poups, FR: https://thenounproject.com/term/eye/3350406/ -->
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
					</div>
				</div>
				<div class="pane" id="items-pane" style="display:none;">
					<div id="items-container">
						<div v-for="(group, groupindex) in groups" class="group collapsed" :id="group.name | slug">
							<h3 v-on:click="toggle(group.name)">{{ group.name }}</h3>
							<div v-for="(item, itemindex) in group.items" class="item" v-on:click="addToList(groupindex,itemindex)">
								<img :src="item.name | slug | img_src" />
								<span>{{ item.name }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="pane" id="notes-pane" style="display:none;">
					<textarea v-model="notes" placeholder="Keep your notes here."></textarea>
				</div>
			</div>
		</div>
	</div>
	<div id="bkg"></div>
</div>
<script>
/*** TODO's
* Move `tool` inside each `recipe`
* Add `fragmentlocations` to relavant `item`s
* (?) Add a map view
* Add folding to `items` view structure, each group defaults to folded
* SVG title graphic
* Better name
* Prevent adding an item multiple times, or make it increase multiplier of existing list item
***/

/*** VUE ***/
let vue = new Vue({
	el: '#app',
	data: {
		groups: [
			{
				name: "Flora & Seeds",
				description: "",
				items: [
					{
						name: "Acid Mushroom",
						location: "Crash Zone, Grassy Plateaus, Grassy Plateaus Caves, Lost River, Mushroom Forest, Reefback, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Acid Mushroom Spore",
						location: "Crash Zone, Grassy Plateaus, Grassy Plateaus Caves, Lost River, Mushroom Forest, Reefback, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Blood Oil",
						location: "Blood Kelp Caves, Blood Kelp Zone"
					},
					{
						name: "Blue Palm Seed",
						location: "Bulb Zone, Mushroom Forest, Mountains Caves, Safe Shallows"
					},
					{
						name: "Brain Coral Sample",
						location: "Bulb Zone, Grassy Plateaus, Kelp Forest, Mountains, Mushroom Forest, Safe Shallows"
					},
					{
						name: "Bulb Bush Sample",
						location: "Bulb Zone"
					},
					{
						name: "Bulbo Tree Sample",
						location: "Floating Island, Mountain Island"
					},
					{
						name: "Cave Bush Seed",
						location: "Jellyshroom Cave, Mountains Caves, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Chinese Potato",
						location: "Floating Island"
					},
					{
						name: "Coral Tube Sample",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Creepvine Sample",
						location: "Kelp Forest"
					},
					{
						name: "Creepvine Seed Cluster",
						location: "Kelp Forest"
					},
					{
						name: "Deep Shroom",
						location: "Blood Kelp Zone, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Deep Shroom Spore",
						location: "Blood Kelp Zone, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Eye Stalk Seed",
						location: "Bulb Zone Caves, Kelp Forest Caves, Mountains Caves, Sparse Reef"
					},
					{
						name: "Fern Palm Seed",
						location: "Floating Island"
					},
					{
						name: "Fungal Sample",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Furled Papyrus Seed",
						location: "Grassy Plateaus, Grassy Plateaus Caves, Jellyshroom Cave, Mountains Caves, Reefback, Sea Treader's Tunnel Caves"
					},
					{
						name: "Gabe's Feather Seed",
						location: "Blood Kelp Zone, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Gel Sack",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Ghost Weed Seed",
						location: "Blood Kelp Zone, Bulb Zone, Lost River, Mountains"
					},
					{
						name: "Grub Basket Seed",
						location: "Floating Island"
					},
					{
						name: "Jaffa Cup Seed",
						location: "Floating Island"
					},
					{
						name: "Jellyshroom Spore",
						location: "Jellyshroom Cave"
					},
					{
						name: "Lantern Fruit",
						location: "Floating Island"
					},
					{
						name: "Marblemelon",
						location: "Floating Island"
					},
					{
						name: "Marblemelon Seeds",
						location: "Grand Reef, Sea Treader's Path"
					},
					{
						name: "Membrain Tree Seed",
						location: "Floating Island"
					},
					{
						name: "Ming Plant Seed",
						location: "Floating Island"
					},
					{
						name: "Pink Cap",
						location: "Floating Island"
					},
					{
						name: "Pink Cap Spore",
						location: "Floating Island"
					},
					{
						name: "Pygmy Fan Seed",
						location: "Bulb Zone, Kelp Forest, Mushroom Forest"
					},
					{
						name: "Redwort Seed",
						location: "Grassy Plateaus, Jellyshroom Cave, Sparse Reef, Underwater Islands"
					},
					{
						name: "Regress Shell Seed",
						location: "Grassy Plateaus Caves, Mountains Caves, Reefback, Sea Treader's Tunnel Caves"
					},
					{
						name: "Rouge Cradle Seed",
						location: "Grassy Plateaus, Grassy Plateaus Caves, Reefback"
					},
					{
						name: "Sea Crown Seed",
						location: "Bulb Zone, Dunes, Dunes Caves, Grassy Plateaus Caves"
					},
					{
						name: "Small Marblemelon",
						location: "Floating Island"
					},
					{
						name: "Speckled Rattler",
						location: "Floating Island"
					},
					{
						name: "Speckled Rattler Spore",
						location: "Floating Island"
					},
					{
						name: "Spiked Horn Grass Seed",
						location: "Bulb Zone Caves, Sea Treader's Path"
					},
					{
						name: "Spotted Dockleaf Seed",
						location: "Bulb Zone, Bulb Zone Caves, Mountains Caves, Underwater Islands"
					},
					{
						name: "Tiger Plant Seed",
						location: "Grassy Plateaus, Grassy Plateaus Caves, Reefback, Sparse Reef"
					},
					{
						name: "Table Coral Sample",
						location: "Bulb Zone, Crash Zone, Crash Zone Mesas, Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Lost River, Mushroom Forest, Reefback Leviathan, Safe Shallows"
					},
					{
						name: "Veined Nettle Seed",
						location: "Grassy Plateaus, Mushroom Forest, Reefback, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Violet Beau Seed",
						location: "Grassy Plateaus, Jellyshroom Cave, Mountains Caves, Reefback, Sea Treader's Path"
					},
					{
						name: "Voxel Shrub Seed",
						location: "Floating Island"
					},
					{
						name: "Writhing Weed Seed",
						location: "Bulb Zone, Grassy Plateaus, Mushroom Forest, Mushroom Forest Caves, Reefback, Safe Shallows, Safe Shallows Caves"
					}
				]
			},
			{
				name: "Raw Materials",
				description: "Raw Materials are items for crafting processes and comprise all non-crafted materials found in Subnautica, one exception being Titanium, which can also be crafted from Metal Salvage.",
				tool: "",
				items: [
					{
						name: "Alien Feces",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Cave Sulfur",
						location: "Kelp Forest Caves, Safe Shallows Caves"
					},
					{
						name: "Copper",
						location: "Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Reefback, Safe Shallows, Safe Shallows Caves, Sparse Reef, Underwater Islands"
					},
					{
						name: "Crystalline Sulfur",
						location: "Inactive Lava Zone, Lava Lakes, Lost River"
					},
					{
						name: "Diamond",
						location: "Blood Kelp Caves, Bulb Zone, Deep Grand Reef, Grand Reef, Inactive Lava Zone, Mountains, Mountains Caves, Underwater Islands"
					},
					{
						name: "Gas Pod",
						location: "Crash Zone Mesas, Dunes, Safe Shallows"
					},
					{
						name: "Gold",
						location: "Blood Kelp Caves, Bulb Zone, Bulb Zone Caves, Crash Zone, Deep Grand Reef, Dunes, Grand Reef, Grassy Plateaus, Jellyshroom Cave, Mushroom Forest, Safe Shallows Caves, Underwater Islands"
					},
					{
						name: "Ion Cube",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Kyanite",
						location: "Inactive Lava Zone, Lava Castle, Lava Lakes"
					},
					{
						name: "Lead",
						location: "Bulb Zone, Crash Zone, Crash Zone Mesas, Dunes, Dunes Caves, Grand Reef, Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Lava Geyser, Mountains, Mountain Island, Mushroom Forest, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Lithium",
						location: "Bulb Zone, Bulb Zone Caves, Crag Field, Crash Zone, Dunes, Dunes Caves, Floating Island, Grassy Plateaus, Jellyshroom Cave, Mountain Island, Mountains, Mountains Caves, Mushroom Forest, Mushroom Forest Caves, Sea Treader's Path, Sparse Reef"
					},
					{
						name: "Magnetite",
						location: "Jellyshroom Cave, Mountain Island, Mountains, Mountains Caves"
					},
					{
						name: "Metal Salvage",
						location: "Aurora, Blood Kelp Zone, Crash Zone, Dunes, Grassy Plateaus, Kelp Forest, Safe Shallows"
					},
					{
						name: "Nickel Ore",
						location: "Lost River"
					},
					{
						name: "Quartz",
						location: "Blood Kelp Caves, Blood Kelp Zone, Crash Zone, Dunes, Grand Reef, Grassy Plateaus, Kelp Forest, Safe Shallows, Safe Shallows Caves, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Ruby",
						location: "Bone Fields Caves, Bulb Zone, Deep Grand Reef, Deep Sparse Reef, Grand Reef, Inactive Lava Zone Corridor, Lost River, Mountains Caves, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Salt Deposit",
						location: "Aurora, Bulb Zone, Crash Zone, Deep Grand Reef, Floating Island, Grassy Plateaus, Kelp Forest, Mushroom Forest, Safe Shallows, Sparse Reef, Underwater Islands"
					},
					{
						name: "Silver Ore",
						location: "Dunes, Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Reefback, Safe Shallows Caves"
					},
					{
						name: "Stalker Tooth",
						location: "Kelp Forest"
					},
					{
						name: "Titanium",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves",
						recipe: {
							ingredients: [
								{
									name: "Metal Salvage",
									quantity: 1
								}
							],
							yield: 4
						}
					},
					{
						name: "Uraninite Crystal",
						location: "Blood Kelp Zone, Grand Reef, Lost River, Mountains"
					}
				]
			},
			{
				name: "Basic Materials",
				description: "Basic Materials are part of the resources branch of the Fabricator, along with Electronics. They are gained from Raw Materials through crafting.",
				tool: "Fabricator",
				items: [
					{
						name: "Bleach",
						recipe: {
							ingredients: [
								{
									name: "Salt Deposit",
									quantity: 1
								},
								{
									name: "Coral Tube Sample",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Enameled Glass",
						recipe: {
							ingredients: [
								{
									name: "Glass",
									quantity: 1
								},
								{
									name: "Stalker Tooth",
									quantity: 1
								}
							],
							yield : 1
						}	
					},
					{
						name: "Fiber Mesh",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Sample",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Glass",
						recipe: {
							ingredients: [
								{
								name: "Quartz",
								quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Lubricant",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Seed Cluster",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Plasteel Ingot",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Lithium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Silicone Rubber",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Seed Cluster",
									quantity: 1
								}
							],
							yield: 2
						}
					},
					{
						name: "Titanium Ingot",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 10
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Advanced Materials",
				description: "Advanced Materials are part of the resources branch of the Fabricator. They are gained from raw materials and basic materials through crafting.",
				tool: "Fabricator",
				items: [
					{
						name: "Aerogel",
						recipe: {
							ingredients: [
								{
									name: "Gel Sack",
									quantity: 1
								},
								{
									name: "Ruby",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Benzene",
						recipe: {
							ingredients: [
								{
									name: "Blood Oil",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Hydrochloric Acid",
						recipe: {
							ingredients: [
								{
									name: "Deep Shroom",
									quantity: 3
								},
								{
									name: "Salt Deposit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Polyaniline",
						recipe: {
							ingredients: [
								{
									name: "Gold",
									quantity: 1
								},
								{
									name: "Hydrochloric Acid",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Synthetic Fibers",
						recipe: {
							ingredients: [
								{
									name: "Benzene",
									quantity: 1 
								},
								{
									name: "Synthetic Fibers",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Electronics",
				description: "Electronics are crafted through the combination of two or more items via the Fabricator. Some items are only available by using the Console Commands or in Creative Mode.",
				tool: "Fabricator",
				items: [
					{
						name: "Advanced Wiring Kit",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Gold",
									quantity: 2
								},
								{
									name: "Computer Chip",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Battery",
						recipe: {
							ingredients: [
								{
									name: "Acid Mushroom",
									quantity: 2
								},
								{
									name: "Gold",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Computer Chip",
						recipe: {
							ingredients: [
								{
									name: "Table Coral Sample",
									quantity: 2
								},
								{
									name: "Gold",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Copper Wire",
						recipe: {
							ingredients: [
								{
									name: "Copper Ore",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Ion Battery",
						recipe: {
							ingredients: [
								{
									name: "Ion Cube",
									quantity: 1
								},
								{
									name: "Gold",
									quantity: 1
								},
								{
									name: "Silver Ore",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Ion Power Cell",
						recipe: {
							ingredients: [
								{
									name: "Ion Battery",
									quantity: 2
								},
								{
									name: "Silicone Rubber",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Power Cell",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 2
								},
								{
									name: "Silicone Rubber",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Reactor Rod",
						recipe: {
							ingredients: [
								{
									name: "Uraninite Crystal",
									quantity: 3
								},
								{
									name: "Lead",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Wiring Kit",
						recipe: {
							ingredients: [
								{
									name: "Silver Ore",
									quantity: 2
								}
							],
							yield: 1
						}
					}
				],
			},
			{
				name: "Equipment",
				description: "Equipment is crafted from Basic Materials or Advanced Materials by using the Fabricator and the Modification Station.",
				tool: "Fabricator, Modification Station",
				items: [
					{
						name: "Compass",
						recipe: {
							ingredients: [
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Fins",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Fire Extinguisher",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "First Aid Kit",
						recipe: {
							ingredients: [
								{
									name: "Fiber Mesh",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Floating Air Pump",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "High Capacity O2 Tank",
						recipe: {
							ingredients: [
								{
									name: "Standard O2 Tank",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 2
								},
								{
									name: "Titanium",
									quantity: 4
								},
								{
									name: "Silver Ore",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Lightweight High Capacity Tank",
						recipe: {
							ingredients: [
								{
									name: "High Capacity O2 Tank",
									quantity: 1
								},
								{
									name: "Plastel Ingot",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Pipe",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Radiation Suit",
						recipe: {
							ingredients: [
								{
									name: "Fiber Mesh",
									quantity: 2
								},
								{
									name: "Lead",
									quantity: 2
								}
							],
							yield: 5
						}
					},
					{
						name: "Rebreather",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Fiber Mesh",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Reinforced Dive Suit",
						recipe: {
							ingredients: [
								{
									name: "Synthetic Fibers",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 2
								},
								{
									name: "Titanium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Scanner Room HUD Chip",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Standard O2 Tank",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Stillsuit",
						recipe: {
							ingredients: [
								{
									name: "Synthetic Fibers",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Swim Charge Fins",
						recipe: {
							ingredients: [
								{
									name: "Fins",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Ultra Glide Fins",
						recipe: {
							ingredients: [
								{
									name: "Fins",
									quantity: 1
								},
								{
									name: "Silicone Rubber",
									quantity: 2
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Ultra High Capacity Tank",
						recipe: {
							ingredients: [
								{
									name: "High Capacity O2 Tank",
									quantity: 1
								},
								{
									name: "Lithium",
									quantity: 4
								}
							],
							yield: 1
						}
					}
				],
			},
			{
				name: "Deployables",
				description: "Deployables are items crafted using the Fabricator. Except for the Seaglide and the Creature Decoy, all other Deployables need to be deployed in the environment in order to function.",
				tool: "Fabricator",
				items: [
					{
						name: "Beacon",
						recipe: {
							ingredients: [
								{
									name: "Copper",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Creature Decoy",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 2
						}
					},
					{
						name: "Grav Trap",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Copper Ore",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Mobile Vehicle Bay",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Lubricant",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seaglide",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Lubricant",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Waterproof Locker",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 4
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Tools",
				description: "Tools are devices that are either crafted from Basic Materials or Advanced Materials by using the Fabricator or upgraded from other Tools using the Modification Station. They are carried in the Inventory and can be equipped in the Toolbar. Some of them can also consume Energy, like the Flashlight.",
				tool: "Fabricator",
				items: [
					{
						name: "Air Bladder",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 1
								},
								{
									name: "Bladderfish",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Flare",
						recipe: {
							ingredients: [
								{
									name: "Cave Sulfur",
									quantity: 1
								}
							],
							yield: 5
						}
					},
					{
						name: "Flashlight",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Habitat Builder",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Laser Cutter",
						recipe: {
							ingredients: [
								{
									name: "Diamond",
									quantity: 2
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Cave Sulfur",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Light Stick",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Pathfinder Tool",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Seed Cluster",
									quantity: 2
								},
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Propulsion Cannon",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Repair Tool",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 1
								},
								{
									name: "Salt Deposit",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Repulsion Cannon",
						recipe: {
							ingredients: [
								{
									name: "Propulsion Cannon",
									quantity: 1
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Scanner",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Stasis Rifle",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Survival Knife",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Thermoblade",
						recipe: {
							ingredients: [
								{
									name: "Survival Knife",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Seamoth",
				description: "",
				tool: "Mobile Vehicle Bay",
				items: [
					{
						name: "Seamoth",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 2
								},
								{
									name: "Lubricant",
									quantity: 2
								},
								{
									name: "Lead",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Depth Module MK1",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Depth Module MK2",
						recipe: {
							ingredients: [
								{
									name: "Seamoth Depth Module MK1",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								},
								{
									name: "Enameled Glass",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Depth Module MK3",
						recipe: {
							ingredients: [
								{
									name: "Seamoth Depth Module MK2",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Ruby",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Storage Module",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Hull Reinforcement",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 4
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Engine Efficiency Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Solar Charger",
						recipe: {
							ingredients: [
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Enameled Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Perimeter Defense System",
						recipe: {
							ingredients: [
								{
									name: "Polyaniline",
									quantity: 1
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Torpedo System",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Sonar",
						recipe: {
							ingredients: [
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Prawn Suit",
				description: "",
				tool: "Mobile vehicle Bay",
				items: [
					{
						name: "Prawn Suit",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 2
								},
								{
									name: "Aerogel",
									quantity: 2
								},
								{
									name: "Enameled Glass",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 2
								},
								{
									name: "Lead",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Depth Module MK1",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Nickel Ore",
									quantity: 3
								},
								{
									name: "Ruby",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Depth Module MK2",
						recipe: {
							ingredients: [
								{
									name: "Prawn Suit Depth Module MK1",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 2
								},
								{
									name: "Kyanite",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Storage Module",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Hull Reinforcement",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 4
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Engine Efficiency Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Thermal Reactor",
						recipe: {
							ingredients: [
								{
									name: "Kyanite",
									quantity: 2
								},
								{
									name: "Polyaniline",
									quantity: 2
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Jump Jet Upgrade",
						recipe: {
							ingredients: [
								{
									name: "Nickel Ore",
									quantity: 2
								},
								{
									name: "Crystalline Sulfur",
									quantity: 3
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Drill Arm",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 4
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Grappling Arm",
						recipe: {
							ingredients: [
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Benzene",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Propulsion Cannon",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Torpedo Arm",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Cyclops",
				description: "",
				tool: "Mobile Vehicle Bay",
				items: [
					{
						name: "Cyclops",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 3
								},
								{
									name: "Enameled Glass",
									quantity: 3
								},
								{
									name: "Lubricant",
									quantity: 1
								},
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Lead",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Depth Module MK1",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Ruby",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Depth Module MK2",
						recipe: {
							ingredients: [
								{
									name: "Cyclops Depth Module MK1",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 3
								},
								{
									name: "Nickel Ore",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Depth Module MK3",
						recipe: {
							ingredients: [
								{
									name: "Cyclops Depth Module MK2",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Kyanite",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Engine Efficiency Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Benzene",
									quantity: 1
								},
								{
									name: "Polyanaline",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Thermal Reactor Module",
						recipe: {
							ingredients: [
								{
									name: "Polyaniline",
									quantity: 2
								},
								{
									name: "Kyanite",
									quantity: 4
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Sonar Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Fire Suppression System Module",
						recipe: {
							ingredients: [
								{
									name: "Aerogel",
									quantity: 2
								},
								{
									name: "Crystalline Sulfur",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Docking Bay Repair Module",
						recipe: {
							ingredients: [
								{
									name: "Repair Tool",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Creature Decoy Tube Module",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 2
								},
								{
									name: "Aerogel",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Shield Generator Module",
						recipe: {
							ingredients: [
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								},
								{
									name: "Power Cell",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Neptune Escape Rocket",
				description: "The Neptune Escape Rocket is a vehicle that is used to leave Planet 4546B. It consists of five constructable parts: the Neptune Launch Platform, the Neptune Gantry, Neptune Ion Boosters, Neptune Fuel Reserve, and Neptune Cockpit. The Neptune Launch Platform can be built using the Mobile Vehicle Bay, while the other four components are built on the launch platform.",
				items: [
					{
						name: "Neptune Launch Platform",
						recipe: {
							ingredients: [
								{
									name: "Lead",
									quantity: 4
								},
								{
									name: "Titanium Ingot",
									quantity: 2
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Gantry",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Lubricant",
									quantity: 1
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Ion Boosters",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Nickel Ore",
									quantity: 3
								},
								{
									name: "Aerogel",
									quantity: 2
								},
								{
									name: "Wiring Kit",
									quantity: 1
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Fuel Reserve",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Crystalline Sulfur",
									quantity: 4
								},
								{
									name: "Kyanite",
									quantity: 4
								},
								{
									name: "Ion Power Cell",
									quantity: 2
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Cockpit",
						recipe: {
							ingredients: [
								{
									name: "Cyclops Shield Generator Module",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Enameled Glass",
									quantity: 1
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
							],
							yield: 1
						}
					}
				]
			}
		],
		list: [],
		notes: "Keep your notes here."
	},
	mounted: function(){
		// Recall data from user's localStorage, if available
		// localStorage.clear(); // Uncomment to clear localStorage
		let localList = JSON.parse(localStorage.getItem("subnauticapda_list"));
		let localNotes = localStorage.getItem("subnauticapda_notes");
		this.list = localList ? localList : [];
		this.notes = localNotes ? localNotes : "";
	},
	updated: function(){
		// Store user data in localStorage
		localStorage.setItem("subnauticapda_list", JSON.stringify(this.list));
		localStorage.setItem("subnauticapda_notes", this.notes);
	},
	filters: {
		slug: function(value){
			if (!value) return "";
			value = value.replace(/\s+/g, "").toLowerCase();
			return value;
		},
		img_src: function(value){
			if (!value) return "";
			value = "//bcgm3.com/dev/subnauticapda/" + value + ".png"
			return value;
		}
	},
	methods: {
		// Tab Navigation
		loadPane: function(id){
			// set the heading
			let heading = document.getElementById("heading");
			let h2 = heading.getElementsByTagName("h2")[0];
			h2.textContent = id;
			// set style for tabs
			let tabs = document.getElementsByClassName("tab");
			for(i = 0; i < tabs.length; i++){
				if(tabs[i].id === id){
					tabs[i].classList.add("active");
				} else {
					tabs[i].classList.remove("active");
				}
			}
			// show/hide the appropriate panes
			let panes = document.getElementsByClassName("pane");
			for(i = 0; i < panes.length; i++){
				if(panes[i].id === id + "-pane"){
					panes[i].style.display = "flex";
				} else {
					panes[i].style.display = "none";
				}
			}
		},
		// Toggle group
		toggle: function(groupid){
			// to refine this, the h3 should toggle the next sibling. pass in `event` instead of `group.name`
			// groupid.target.nextElementSibling.classList.add("collapsed");
			groupid = this.$options.filters.slug(groupid);
			let group = document.getElementById(groupid);
			// console.log(group);
			if(group.classList.contains("collapsed")){
				group.classList.remove("collapsed");
			} else {
				group.classList.add("collapsed");
			}
		},
		// Add an item from data.items to data.list
		addToList: function(groupindex,itemindex){
			let itemOriginal = this.groups[groupindex].items[itemindex];
			let itemList = this.list.push(itemOriginal) - 1;
			if(itemOriginal.recipe){
				// Add multiplier with default value
				this.list[itemList].recipe.multiplier = 1;
				// Copy original yield & ingredients quantities for later reference
				this.list[itemList].recipe.yieldOriginal =itemOriginal.recipe.yield;
				let ingredients = this.list[itemList].recipe.ingredients;
				for(i = 0; i < ingredients.length; i++){
					ingredients[i].quantity = ingredients[i].quantityOriginal = itemOriginal.recipe.ingredients[i].quantity; 
				}
			}
		},
		// Remove an item from data.list
		removeFromList: function(index){
			this.list[index] = null;
			this.list.splice(index,1);
		},
		// Increment/decrement yield & ingredients quantities
		changeQuantity: function(operation,index){
			let multiplier = this.list[index].recipe.multiplier;
			// Determine if operation is increment or decrement
			if(operation === "+"){
				multiplier = ++this.list[index].recipe.multiplier;
			} else {
				multiplier = --this.list[index].recipe.multiplier;
			}
			// If multiplier is 0, remove from list
			if(this.list[index].recipe.multiplier === 0){
				this.removeFromList(index);
				return;
			}
			// Perform operation on yield and ingredients
			this.list[index].recipe.yield = this.list[index].recipe.yieldOriginal * multiplier;
			let ingredients = this.list[index].recipe.ingredients;
			for(i = 0; i < ingredients.length; i++){
					ingredients[i].quantity = ingredients[i].quantityOriginal * multiplier; 
				}
		}
	}
})
</script>
</body>
</html>