import { useState } from 'react'
import './App.css'

function Header() {
	return (
		<>
			<div id="tabs">
				<a href="#" className='tab' id="list" aria-label="List" title="List">One</a>
				<a href="#" className='tab' id="list" aria-label="List" title="List">Two</a>
				<a href="#" className='tab' id="list" aria-label="List" title="List">Three</a>
			{/* <RouterLink to="/list" class="tab" id="list" aria-label="List" title="List">
				<IconBook />
			</RouterLink>
			<RouterLink to="/items" class="tab" id="items" aria-label="Items" title="Items">
				<IconWrench />
			</RouterLink>
			<RouterLink to="/notes" class="tab" id="notes" aria-label="Notes" title="Notes">
				<IconDocument />
			</RouterLink> */}
			</div>
		</>
	)
}

export default Header


// import { RouterLink } from 'vue-router'
// import IconBook from './icons/IconBook.vue'
// import IconWrench from '../components/icons/IconWrench.vue'
// import IconDocument from '../components/icons/IconDocument.vue';

// export default {
// 	components: { 
// 		IconBook,
// 		IconWrench,
// 		IconDocument
// 	}
// }