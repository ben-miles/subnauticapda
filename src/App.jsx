import {useState} from 'react';
import ItemsData from "./assets/data/items.json";
import Navigation from './Navigation.jsx';
import Title from './Title.jsx';
import HomeView from './HomeView.jsx';
import ItemsView from './ItemsView.jsx';
import ListView from './ListView.jsx';
import NotesView from './NotesView.jsx';
import Footer from './Footer.jsx';

export default function App() {
	const [items, setItems] = useState(ItemsData);
	const [view, setView] = useState('Home');
	const [notes, setNotes] = useState('');
	
	return (
		<>
			<div id="pda">
				<div id="screen">
					<Navigation setView={setView} />
					<Title title={view} />
					<div id="panes">
						<HomeView view={view} />
						<ItemsView view={view} items={items} setItems={setItems} />
						<ListView view={view} />
						<NotesView view={view} notes={notes} setNotes={setNotes} />
					</div>
				</div>
			</div>
			<Footer />
			<div id="bkg"></div>
		</>
	)
}