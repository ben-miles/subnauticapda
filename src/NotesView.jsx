export default function NotesView({view, notes, setNotes}) {
	const changeHandler = (event) => {
		setNotes(event.target.value);
	};
	if (view === 'Notes') {
		return (
			<div className="pane" id="notes-pane">
				<textarea onChange={changeHandler} placeholder="Keep your notes here." value={notes}></textarea>
			</div>
		)
	}
}