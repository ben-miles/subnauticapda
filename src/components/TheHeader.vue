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
		<RouterLink to="/list" class="tab active" id="list" aria-label="List" title="List">
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

<style></style>