<script>
import { RouterLink } from 'vue-router'
// import IconLogo from './icons/IconLogo.vue'
// import IconItems from '../components/icons/IconItems.vue'
// import IconTranslator from '../components/icons/IconTranslator.vue';
// import IconQuestionMark from '../components/icons/IconQuestionMark.vue';

export default {
	components: { 
		// IconLogo,
		// IconItems,
		// IconTranslator,
		// IconQuestionMark
	},
	methods: {
		toggleDrawer() {
			// Toggle the drawer open/closed
			let docbody = document.body;
			docbody.classList.toggle("drawer-open");
			// If the drawer is being opened, focus on the filter input
			if(docbody.classList.contains("drawer-open")){
				let filter = document.getElementsByClassName("filter")[0];
				let filterInput = filter.getElementsByTagName("input")[0];
				filterInput.focus();
			}
		}
  }
}
</script>

<template>

	<!-- TABS -->
	<div id="tabs">

<RouterLink to="/list" class="tab active" id="list" aria-label="List" title="List">
	<svg viewBox="0 0 36 34">
		<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="18" y1="2.9648" x2="18" y2="30.6665">
			<stop offset="0" style="stop-color:#F3F9FD"/>
			<stop offset="1" style="stop-color:#79D1F6"/>
		</linearGradient>
		<path d="M19,5.951v17.716h-2V5.951C13.646,2.734,2.895,2.147,1,4.042v22.625c6.5,0,12.438-0.563,17,4
c4.563-4.563,10.5-4,17-4V4.042C33.105,2.147,22.354,2.734,19,5.951z"/>
	</svg>
</RouterLink>

<RouterLink to="/items" class="tab" id="items" aria-label="Items" title="Items">
	<svg viewBox="0 0 34 34">
		<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="17.2026" y1="1.0273" x2="17.2026" y2="32.7651">
		<stop offset="0" style="stop-color:#F3F9FD"/>
		<stop offset="1" style="stop-color:#79D1F6"/>
	</linearGradient>
		<path d="M8.927,2.374l3.447,3.447c1.725,1.725,1.725,4.522,0,6.247c-1.725,1.725-4.521,1.725-6.246,0
L2.681,8.621c-2.102,4.176-1.777,8.947,1.209,11.932c2.98,2.98,7.74,3.31,11.912,1.219l10.994,10.994l6.275-6.276L22.077,15.495
c2.092-4.171,1.763-8.932-1.218-11.913C17.874,0.597,13.104,0.273,8.927,2.374z"/>
	</svg>
</RouterLink>

<RouterLink to="/notes" class="tab" id="notes" aria-label="Notes" title="Notes">
	<svg viewBox="0 0 36 34">
		<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="18" y1="1.6665" x2="18" y2="31.6665">
			<stop offset="0" style="stop-color:#F3F9FD"/>
			<stop offset="1" style="stop-color:#79D1F6"/>
		</linearGradient>
		<path d="M24.817,1.667H1v30h34V11.85L24.817,1.667z M6,6.667h13v2H6V6.667z M6,11.667h13v2H6V11.667z
M31,23.667H6v-2h25V23.667z M31,18.667H6v-2h25V18.667z M24,12.667v-7l7,7H24z"/>
	</svg>
</RouterLink>

</div>



</template>

<style>
/*header {
	 align-items: flex-end;
	background: rgba(9, 7, 9, 0.7);
	border-bottom: solid 3px #e0b142;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 12px;
	height: 90px;
}
.brand {
	display: flex;
	flex-direction: row;
	text-decoration: none;
} */

/* LOGO */
/* #logo {
    height: 64px;
    filter: drop-shadow(0 0 10px rgba(164, 255, 247, 0.7));
    transition: all 0.5s;
}
#logo * {
	transition: all 0.25s;
	fill: rgb(245, 255, 252);
}
#logo #bottom-right,
#logo #top-right,
#logo #left,
#logo #middle {
	fill: #000;
}
#logo #diamond,
#logo #core {
	stroke: #000;
}
.brand:hover #logo {
	filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
	transform: scale(1.1);
}
.brand:hover #logo #diamond {
	fill: #070707;
}
.brand:hover #logo #core {
	fill: #bf1b19;
	opacity: 0.9;
	stroke: none;
	animation-name: pulse;
	animation-direction: alternate;
	animation-duration: 1s;
	animation-iteration-count: infinite;
}
@keyframes pulse {
	from {
		transform: scale(1) translate(0, 0);
	}
	to {
		transform: scale(1.25) translate(-10%, -7%);
	}
}
.brand:hover #logo #bottom-right,
.brand:hover #logo #top-right,
.brand:hover #logo #left,
.brand:hover #logo #middle {
	fill: #fff;
}
.brand:hover #logo #top-right {
	opacity: 0.7;
} */

/* SITE TITLE */
/* .brand .title {
	display: none;
}
@media ( min-width: 721px ) {
	.brand .title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin-left: 15px;
	}
}
.site-title, 
.tagline {
	font-weight: 300;
	text-shadow: 0 0 25px rgba(164, 255, 247, 0.7), 0 0 5px rgba(255, 255, 255, 0.5);
}
.site-title {
	font-family: "geosanslight-nmsregular", Vazirmatn, Helvetica, Arial, sans-serif;
	font-size: 30px;
	text-transform: uppercase;
}
.tagline {
	font-size: 12px;
} */

/* MENU */
/* .menu .nav {
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: flex-end;
	gap: 10px;
}
.menu a {
	background: transparent;
	border: none;
	border-radius: 5px 5px 0 0;
	color: #9fa2aa;
	display: flex;
	flex-direction: row;
	align-items: center;
	outline: none;
	font-family: "geosanslight-nmsregular", Vazirmatn, Helvetica, Arial, sans-serif;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 1px;
	margin-bottom: -11px;
	padding: 10px;
	text-decoration: none;
	text-transform: uppercase;
}
.menu a:hover,
.menu .router-link-active {
	background: #e0b142;
	color: #2e2c13;
	text-shadow: 2px 1px 1px rgba(0,0,0,0.25);
}
.menu a svg {
	height: 16px;
	width: auto;
	margin-right: 10px;
	fill: #9fa2aa;
}
.menu a:hover svg,
.menu a.router-link-active svg {
	fill: #2e2c13;
	filter: drop-shadow(2px 0 2px rgba(0,0,0,0.25));
} */
</style>