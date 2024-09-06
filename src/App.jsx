import {useState} from 'react';
import Navigation from './Navigation.jsx';
import Title from './Title.jsx';
import HomeView from './HomeView.jsx';
import ItemsView from './ItemsView.jsx';
import ListView from './ListView.jsx';
import NotesView from './NotesView.jsx';
import Footer from './Footer.jsx';

function App() {
	const [count, setCount] = useState(0);

	const [view, setView] = useState('Home');
	return (
		<>
			<div id="pda">
				<div id="screen">
					<Title />
					<Navigation setView={setView} />
					<div id="panes">
						<HomeView />
						<ItemsView />
						<ListView />
						<NotesView />
						{/* <RouterView :key="$route.path" @toggleItem="toggleItem" :itemsData="itemsData" /> */}
						<button onClick={() => setCount((count) => count + 1)}>
							count is {count}
						</button>
					</div>
				</div>
			</div>
			<Footer />
			<div id="bkg"></div>
		</>
	)
}

export default App;