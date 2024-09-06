import { useState } from 'react';

export default function NotesView({notes, setNotes}) {
	const changeHandler = (event) => {
		setNotes(event.target.value);
	};
	return (
		<div className="pane" id="notes-pane">
			<textarea onChange={changeHandler} placeholder="Keep your notes here." value={notes}></textarea>
		</div>
	)
}