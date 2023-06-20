// TASK 3 START

// TASK 3 TIP: Import the page components
import HomePage from '../pages/page-home'
import AboutPage from '../pages/page-about'
import BooksPage from '../pages/page-books'

import { Route, Routes } from 'react-router-dom'

export function AppRouter() {
	return (
		<>
			{/* TASK 3 TIP: Define here the routes for your pages using "react-router-dom" package */}
			<Routes>
				<Route path='home' element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
				<Route path='books' element={<BooksPage />} />
			</Routes>
		</>
	)
}
