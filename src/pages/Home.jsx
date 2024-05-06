import About from '../components/About'
import Article from '../components/Articles'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import Service from '../components/Service'
import Slide from '../components/Slide'
export default function Home() {
	return (
		<div className="text-white w-full p-10">
			<Banner />
			<About />
			<Quote />
			<Service />
			<Slide />
			<Article />
			<Contact />
			<Footer />
		</div>
	)
}
