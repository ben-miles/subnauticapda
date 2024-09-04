import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<div id="pda">
			<div id="screen">
				<Header />
				<App />
				{/* <RouterView :key="$route.path" @toggleItem="toggleItem" :itemsData="itemsData" /> */}
			</div>
		</div>
		<div id="bkg"></div>
	</StrictMode>,
)
