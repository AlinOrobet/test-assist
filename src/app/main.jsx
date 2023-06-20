import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'the-new-css-reset/css/reset.css'

import App from './app.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
