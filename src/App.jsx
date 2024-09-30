import {useEffect, useState} from 'react';
import GroupsData from "./assets/data/groups.json";
import ItemsData from "./assets/data/items.json";
import Navigation from './Navigation.jsx';
import Title from './Title.jsx';
import ViewHelp from './ViewHelp.jsx';
import ViewItems from './ViewItems.jsx';
import ViewPinned from './ViewPinned.jsx';
import ViewNotes from './ViewNotes.jsx';
import Footer from './Footer.jsx';
import IconPin from './IconPin.jsx';
import IconDocument from './IconDocument.jsx';
import IconWrench from './IconWrench.jsx';
import IconHelp from './IconHelp.jsx';

export default function App() {
	const [groups, setGroups] = useState(GroupsData);
	const [items, setItems] = useState(ItemsData);
	const [notes, setNotes] = useState('');
	const [view, setView] = useState([
		{ id: 'Pinned', isActive: false, icon: <IconPin /> },
		{ id: 'Items', isActive: false, icon: <IconWrench /> },
		{ id: 'Notes', isActive: false, icon: <IconDocument /> },
		{ id: 'Help', isActive: true, icon: <IconHelp /> },
	]);
	
	// when the app first loads, retrieve state data from localStorage
	useEffect(()=>{
		if (localStorage.getItem('groups')) {
			setGroups(JSON.parse(localStorage.getItem('groups')));
		}
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
					<Navigation items={items} view={view} setView={setView} />
					<Title view={view} />
					<div id="panes">
						<ViewPinned view={view} items={items} setItems={setItems} />
						<ViewItems view={view} groups={groups} setGroups={setGroups} items={items} setItems={setItems} />
						<ViewNotes view={view} notes={notes} setNotes={setNotes} />
						<ViewHelp view={view} />
					</div>
				</div>
			</div>
			<Footer />
			<div id="bkg">
				<video autoPlay loop muted>
					<source src="../public/video/subnauticapda_waves.webm" type="video/webm" />
				</video>
			</div>
		</>
	)
}