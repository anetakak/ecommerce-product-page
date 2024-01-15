import classes from "./Cart.module.css";

const Cart = () => {
	return (
		<div className={classes.cart}>
			<h3 className={classes.title}>Cart</h3>
			<div className={classes.content}>
				<p className={classes.message}>Your cart is empty</p>
			</div>
		</div>
	);
};
export default Cart;
