import {useState} from 'react';
import Navigation from './Navigation.jsx';
import Title from './Title.jsx';
import View from './View.jsx';
import Footer from './Footer.jsx';

export default function App() {
	const [view, setView] = useState('Home');
	const [notes, setNotes] = useState('');
	
	return (
		<>
			<div id="pda">
				<div id="screen">
					<Navigation setView={setView} />
					<Title title={view} />
					<div id="panes">
						<View notes={notes} setNotes={setNotes} view={view} />
					</div>
				</div>
			</div>
			<Footer />
			<div id="bkg"></div>
		</>
	)
}