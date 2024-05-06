import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@splidejs/react-splide/css'
import Home from './pages/Home'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	)
}
