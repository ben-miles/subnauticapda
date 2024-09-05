import { useState } from 'react';

// export default {
// 	data() {
// 		return {
// 			notes: ""
// 		}
// 	},
// }

function NotesView() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="pane" id="notes-pane">
				<textarea v-model="notes" placeholder="Keep your notes here."></textarea>
			</div>
		</>
	)
}

export default NotesView;