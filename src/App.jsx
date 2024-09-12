import {useEffect, useState} from 'react';
import ItemsData from "./assets/data/items.json";
import Navigation from './Navigation.jsx';
import Title from './Title.jsx';
import ViewHelp from './ViewHelp.jsx';
import ViewItems from './ViewItems.jsx';
import ViewPinned from './ViewPinned.jsx';
import ViewNotes from './ViewNotes.jsx';
import Footer from './Footer.jsx';

export default function App() {
	const [items, setItems] = useState(ItemsData);
	const [view, setView] = useState('Help');
	const [notes, setNotes] = useState('');
	// when the app first loads, retrieve state data from localStorage
	useEffect(()=>{
		if (localStorage.getItem('items')) {
			setItems(JSON.parse(localStorage.getItem('items')));
		}
		if (localStorage.getItem('notes')) {
			setNotes(localStorage.getItem('notes'));
		}
		if (localStorage.getItem('view')) {
			const viewCopy = [...view];
			viewCopy.forEach(button => {
				button.isActive = button.id === localStorage.getItem('view');
			});
			setView(viewCopy);
		}
    }, []);
	
	return (
		<>
			<div id="pda">
				<div id="screen">
					<Navigation items={items} setView={setView} />
					<Title title={view} />
					<div id="panes">
						<ViewPinned view={view} items={items} setItems={setItems} />
						<ViewItems view={view} items={items} setItems={setItems} />
						<ViewNotes view={view} notes={notes} setNotes={setNotes} />
						<ViewHelp view={view} />
					</div>
				</div>
			</div>
			<Footer />
			<div id="bkg"></div>
		</>
	)
}