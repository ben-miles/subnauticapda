import { useState } from 'react';
import IconBook from './IconBook.jsx';
import IconDocument from './IconDocument.jsx';
import IconWrench from './IconWrench.jsx';

function Header() {
	return (
		<>
			<div id="tabs">
				<a href="#" className='tab' id="list" aria-label="List" title="List"><IconBook/><div>List</div></a>
				<a href="#" className='tab' id="list" aria-label="List" title="List"><IconWrench/><div>Items</div></a>
				<a href="#" className='tab' id="list" aria-label="List" title="List"><IconDocument/><div>Notes</div></a>
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

export default Header;


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