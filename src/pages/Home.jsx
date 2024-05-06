import About from '../components/About'
import Article from '../components/Articles'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import Service from '../components/Service'
import Slide from '../components/Slide'
import NavBar from '../components/NavBar'
export default function Home() {
	return (
		<div className="text-white w-full p-10 md:w-[1226px] md:mx-auto">
			<NavBar />
			<Banner />
			<div className="md:flex md:flex-col md:gap-10">
				<About />
				<Quote />
			</div>
			<Service />
			<Slide />
			<Article />
			<Contact />
			<Footer />
		</div>
	)
}
