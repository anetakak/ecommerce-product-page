import { useContext } from "react";
import CartContext from "../../../store/CartContext";

import classes from "./Cart.module.css";

const Cart = () => {
	const cartCtx = useContext(CartContext);

	return (
		<div className={classes.cart}>
			<h3 className={classes.title}>Cart</h3>
			<div className={classes.content}>
				{cartCtx.items === 0 ? (
					<p className={classes.message}>Your cart is empty</p>
				) : (
					<p>{`You have ${cartCtx.items} items in the cart`}</p>
				)}
			</div>
		</div>
	);
};
export default Cart;
