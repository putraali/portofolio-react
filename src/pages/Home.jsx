import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
