<script>
import IconGitHub from './icons/IconGitHub.vue'

export default {
	components: { 
		IconGitHub
	},
	data() {
		return {
			publishYear: new Date(2020,6,9).getFullYear(),
			currentYear: new Date().getFullYear()
		}
	}
}
</script>

<template>
	<footer>
		<div class="title">
			<h1 id="title"><span>SUB</span>NAUTICA PDA</h1>
		</div>
		<div class="copyright">© {{ publishYear }} - {{ currentYear }} <a href="https://benmiles.com/" target="_blank">Ben Miles</a>. <a href="#" target="_self">Subnautica PDA</a> is not affiliated with <a href="http://subnauticagame.com/" target="_blank">Subnautica</a> or <a href="https://unknownworlds.com/" target="_blank">Unknown Worlds</a>. See <a href="https://github.com/ben-miles/subnauticapda" target="_blank">the <IconGitHub />GitHub repo</a> for more information!</div>
	</footer>
</template>

<style>
footer {
	position: absolute;
	width: 100%;
	bottom: 0;
	background: rgba(9, 7, 9, 0.7);
	color: rgba(255, 255, 255, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 40px;
	padding: 8px;
	font-size: 12px;
	text-align: center;
	z-index: -1;
}
footer a {
	color: rgba(255, 255, 255, 0.6);
	text-decoration: none;
	font-weight: 500;
}
footer a:hover {
	color: #fff;
}
footer .icon-github {
    fill: rgba(255, 255, 255, 0.6);
	height: 14px;
    margin: 0 4px 0 0;
	width: auto;
}
footer a:hover .icon-github {
	fill: #fff;
}
#title {
	background: linear-gradient(#7fc8d7, #eee);
	font-family: "Days One", sans-serif;
	font-size: 40px;
	margin: 0 auto 4px;
	position: relative;
	text-align: center;
	background-clip: text;
	color: transparent;
}
#title:after {
    content: "SUBNAUTICA PDA";
    background-clip: text;
    color: #000;
    position: absolute;
    top: 1px;
    left: 0;
    z-index: -1;
    white-space: nowrap;
	text-shadow: 2px 6px 6px rgba(0,0,0,0.5);
}
#title:before {
    content: "SUBNAUTICA PDA";
    background-clip: text;
    color: #fff;
    position: absolute;
    top: -1px;
    left: 0;
    z-index: -1;
    white-space: nowrap;
}
#title span {
    color: #f28d00; }
</style>