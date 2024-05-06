import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@splidejs/react-splide/css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
export default function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	)
}
