<script>
import { RouterLink } from 'vue-router'
import IconBook from './icons/IconBook.vue'
import IconWrench from '../components/icons/IconWrench.vue'
import IconDocument from '../components/icons/IconDocument.vue';

export default {
	components: { 
		IconBook,
		IconWrench,
		IconDocument
	}
}
</script>

<template>
	<div id="tabs">
		<RouterLink to="/list" class="tab" id="list" aria-label="List" title="List">
			<IconBook />
		</RouterLink>
		<RouterLink to="/items" class="tab" id="items" aria-label="Items" title="Items">
			<IconWrench />
		</RouterLink>
		<RouterLink to="/notes" class="tab" id="notes" aria-label="Notes" title="Notes">
			<IconDocument />
		</RouterLink>
	</div>
</template>

<style>
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
	left: calc( 50% + 4px );
	position: relative;
	top: 10px;
	width: 10px;
}
#tabs .tab:hover, 
#tabs .tab.router-link-active  {
	background: #114cbf;
}
#tabs .tab:hover svg {
	fill: #fff;
}
#tabs .tab.router-link-active:after {
	background: #f3feff;
	box-shadow: 0 0 5px #2f5cb3, 0 0 5px #2f5cb3;
}
#tabs .tab div, 
#tabs .tab svg {
	transform: skew(20deg) !important;
}
#tabs .tab svg {
	fill: url(#gradient) #fff;
	width: 25px;
	position: relative;
	top: 2px;
	filter: drop-shadow(0 0 3px #1d67a4);
}
</style>