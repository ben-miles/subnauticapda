export default function Title({view}) {
	return (
		<div id="heading">
			<h2>{view.filter(view => view.isActive === true).map(view => view.id)}</h2>
		</div>
	)
}