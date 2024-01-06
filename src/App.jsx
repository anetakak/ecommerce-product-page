import Attribution from "./components/Attribution/Attribution";
import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

function App() {
	return (
		<>
			<Header />
			<main>
				<Gallery />
			</main>
			<Attribution />
		</>
	);
}

export default App;
