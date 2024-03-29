import { useState, useContext, useRef } from "react";
import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/image-avatar.png";

import MenuIcon from "../UI/Icons/MenuIcon";
import CartIcon from "../UI/Icons/CartIcon";
import Navigation from "../Navigation/Navigation";
import Cart from "../Attribution/Cart/Cart";
import CartContext from "../../store/CartContext";

const Header = () => {
	const cartCtx = useContext(CartContext);
	const [showNav, setShowNav] = useState(false);
	const [showCart, setShowCart] = useState(false);

	const cartButton = useRef();

	const showNavHandler = () => {
		setShowNav(true);
	};
	const closeNavHandler = () => {
		setShowNav(false);
	};
	const showCartHandler = () => {
		setShowCart((prev) => !prev);
	};
	return (
		<header className={classes.header}>
			<div className={classes.navbar}>
				<button onClick={showNavHandler} className={classes["mobilenav-btn"]}>
					<MenuIcon />
				</button>
				<img src={logo} alt="logo sneakers" className={classes.logo} />
				<Navigation onCloseNav={closeNavHandler} showNav={showNav} />
			</div>
			<div className={classes["user-panel"]}>
				<button
					ref={cartButton}
					onClick={showCartHandler}
					className={classes["cart-btn"]}>
					<CartIcon />
					{cartCtx.items !== "" && (
						<div className={classes["cart-items"]}>
							<p>{cartCtx.items.quantity}</p>
						</div>
					)}
				</button>
				<button>
					<img src={avatar} alt="" className={classes.avatar} />
				</button>
			</div>
			{showCart && <Cart ref={cartButton} onCloseCart={showCartHandler} />}
		</header>
	);
};
export default Header;
