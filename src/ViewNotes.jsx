export default function ViewNotes({view, notes, setNotes}) {
	const changeHandler = (event) => {
		setNotes(event.target.value);
	};
	if (view === 'Notes') {
		return (
			<div className="pane notes">
				<textarea onChange={changeHandler} placeholder="Keep your notes here." value={notes}></textarea>
			</div>
		)
	}
}