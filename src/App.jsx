import Attribution from "./components/Attribution/Attribution";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { CartContextProvider } from "./store/CartContext";

function App() {
	return (
		<div className="wrapper">
			<CartContextProvider>
				<Header />
				<main>
					<ProductCard />
				</main>
			</CartContextProvider>
			<Attribution />
		</div>
	);
}

export default App;
