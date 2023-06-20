import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'

import './app.css'
import { AppRouter } from './app-router'
function App() {
	return (
		<>
			<Header />

			<div style={{ height: '100%', padding: '15px' }}>
				{/* TASK 3 TIP: use AppRouter component here */}
				<AppRouter />
			</div>
			<Footer />
		</>
	)
}

export default App
