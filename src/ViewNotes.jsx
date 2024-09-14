export default function ViewNotes({view, notes, setNotes}) {
	const changeHandler = (event) => {
		setNotes(event.target.value);
		localStorage.setItem('notes', event.target.value);
	};
	if (view.filter(view => view.id === 'Notes')[0].isActive) {
		return (
			<div className="pane notes">
				<textarea onChange={changeHandler} placeholder="Keep your notes here." value={notes}></textarea>
			</div>
		)
	}
}