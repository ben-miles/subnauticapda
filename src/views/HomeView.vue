<script>
import { RouterLink } from 'vue-router'

export default {
	components: {}
}
</script>

<template>
	<!-- HEADING -->
	<div id="heading">
		<h2>Home</h2>
	</div>
	<!-- PANES -->
</template>

<style>
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
</style>