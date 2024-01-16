import { createContext, useState } from "react";

const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
})

export const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState(0);

    const addItem = (quantity) => {
        setItems(prev => prev + quantity)
    }

    const CartCtx = {
        items: items,
        addItem
    }

    return <CartContext.Provider value={CartCtx}>{children}</CartContext.Provider>
}
export default CartContext;