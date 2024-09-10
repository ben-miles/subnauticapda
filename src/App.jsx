import {useState} from 'react';
import ItemsData from "./assets/data/items.json";
import Navigation from './Navigation.jsx';
import Title from './Title.jsx';
import ViewHome from './ViewHome.jsx';
import ViewItems from './ViewItems.jsx';
import ViewList from './ViewList.jsx';
import ViewNotes from './ViewNotes.jsx';
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
						<ViewHome view={view} />
						<ViewList view={view} items={items} setItems={setItems} />
						<ViewItems view={view} items={items} setItems={setItems} />
						<ViewNotes view={view} notes={notes} setNotes={setNotes} />
					</div>
				</div>
			</div>
			<Footer />
			<div id="bkg"></div>
		</>
	)
}