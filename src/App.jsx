import Attribution from "./components/Attribution/Attribution";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main>
				<ProductCard />
			</main>
			<Attribution />
		</div>
	);
}

export default App;
