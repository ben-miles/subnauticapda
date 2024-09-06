import {useState} from 'react';
import Navigation from './Navigation.jsx';
import Title from './Title.jsx';
import View from './View.jsx';
import Footer from './Footer.jsx';

function App() {
	const [count, setCount] = useState(0);

	const [view, setView] = useState('Home');
	const [notes, setNotes] = useState('');
	
	return (
		<>
			<div id="pda">
				<div id="screen">
					<Navigation setView={setView} />
					<Title title={view} />
					<div id="panes">
						{/* <RouterView :key="$route.path" @toggleItem="toggleItem" :itemsData="itemsData" /> */}
						<button onClick={() => setCount((count) => count + 1)}>
							count is {count}
						</button>
						<View notes={notes} setNotes={setNotes} view={view} />
					</div>
				</div>
			</div>
			<Footer />
			<div id="bkg"></div>
		</>
	)
}

export default App;