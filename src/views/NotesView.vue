<script>
import { RouterLink } from 'vue-router'

export default {
	data() {
		return {
			notes: ""
		}
	},
}
</script>

<template>
<!-- <div> -->
	<!-- HEADING -->
	<div id="heading">
		<h2>Notes</h2>
	</div>
	<!-- PANES -->
	<div id="panes">
		<div class="pane" id="notes-pane">
			<textarea v-model="notes" placeholder="Keep your notes here."></textarea>
		</div>
	</div>
<!-- </div> -->
</template>

<style>

</style>