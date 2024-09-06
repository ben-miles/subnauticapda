import HomeView from './HomeView.jsx';
import ItemsView from './ItemsView.jsx';
import ListView from './ListView.jsx';
import NotesView from './NotesView.jsx';

export default function View({notes, setNotes, view}) {
	if(view === 'Home') {
		return (
			<HomeView />
		)
	} else if(view === 'Items') {
		return (
			<ItemsView />
		)
	} else if(view === 'List') {	
		return (
			<ListView />
		)
	} else if(view === 'Notes') {
		return (
			<NotesView notes={notes} setNotes={setNotes} />
		)
	}
}