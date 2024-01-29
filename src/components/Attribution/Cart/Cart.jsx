import { useContext } from "react";
import CartContext from "../../../store/CartContext.jsx";
import Button from "../../UI/Button/Button.jsx";
import DeleteIcon from "../../UI/Icons/DeleteIcon.jsx";
import { currencyFormatter } from "../../../util/formatting";

import classes from "./Cart.module.css";

const Cart = () => {
	const cartCtx = useContext(CartContext);
	const totalItems = cartCtx.items.quantity * cartCtx.items.price;

	const deleteHandler = () => {
		cartCtx.removeItem();
	}

	const ItemInCart = () => {
		return (
			<div className={classes["item-box"]}>
				<img
					src={cartCtx.items.images[0]}
					alt="thumbnail of item"
					className={classes['item-thumbnail']}
				/>
				<div className={classes['item-summary']}>
					<p>{cartCtx.items.name}</p>
					<p>
						{currencyFormatter.format(cartCtx.items.price)} x {cartCtx.items.quantity}{" "}
						<span>{currencyFormatter.format(totalItems)}</span>
					</p>
				</div>
				<button onClick={deleteHandler} className={classes["delete-btn"]}>
					<DeleteIcon />
				</button>
			</div>
		);
	};
	return (
		<div className={classes.cart}>
			<h3 className={classes.title}>Cart</h3>
			<div className={classes.content}>
				{cartCtx.items.length === 0 ? (
					<p className={classes.message}>Your cart is empty</p>
				) : (
					<>
						<ItemInCart />
						<Button className={classes['checkout-btn']}>Checkout</Button>
					</>
				)}
			</div>
		</div>
	);
};
export default Cart;
