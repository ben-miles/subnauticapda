import { useState } from 'react';
import IconBook from './IconBook.jsx';
import IconDocument from './IconDocument.jsx';
import IconWrench from './IconWrench.jsx';

export default function Header() {
	return (
		<>
			<div id="tabs">
				<button href="#" className='tab' id="list" aria-label="List" title="List"><IconBook/><span>List</span></button>
				<button href="#" className='tab' id="items" aria-label="Items" title="Items"><IconWrench/><span>Items</span></button>
				<button href="#" className='tab' id="notes" aria-label="Notes" title="Notes"><IconDocument/><span>Notes</span></button>
			</div>
		</>
	)
}