import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div id="pda">
			<div id="screen">
				<Header />
				{/* <RouterView :key="$route.path" @toggleItem="toggleItem" :itemsData="itemsData" /> */}
			</div>
		</div>
		<Footer />
		<div id="bkg"></div>
    </>
  )
}

export default App
