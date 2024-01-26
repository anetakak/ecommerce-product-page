import { createContext, useState } from "react";

const CartContext = createContext({
	items: {},
	addItem: () => {},
	removeItem: () => {},
});

export const CartContextProvider = ({ children }) => {
	const [items, setItems] = useState("");

	const addItem = (item, quantity) => {
		if (items !== "") {
			setItems((prev) => ({
				...prev,
				quantity: prev.quantity + quantity,
			}));
		} else {
			setItems({ ...item, quantity: quantity });
		}
	};

	const removeItem = () => {
		if (items.quantity <= 1) {
			setItems("");
		} else {
			setItems((prev) => ({
				...prev,
				quantity: prev.quantity - 1,
			}));
		}
	};

	const CartCtx = {
		items: items,
		addItem,
		removeItem,
	};

	return (
		<CartContext.Provider value={CartCtx}>{children}</CartContext.Provider>
	);
};
export default CartContext;
