import { useState, useContext } from "react";
import classes from "./Header.module.css";
import avatar from "../../assets/images/image-avatar.png";

import MenuIcon from "../UI/Icons/MenuIcon";
import CartIcon from "../UI/Icons/CartIcon";
import Navigation from "../Navigation/Navigation";
import Cart from "../Attribution/Cart/Cart";
import CartContext from "../../store/CartContext";

const Header = () => {
	const cartCtx = useContext(CartContext);
    const [showNav, setShowNav] = useState(false);
	const [showCart, setShowCart] = useState(false);

    const showNavHandler = () => {
        setShowNav(true);
    }
    const closeNavHandler = () => {
        setShowNav(false);
    }
	const showCartHandler = () => {
		setShowCart(prev => !prev);
	}
	return (
		<header className={classes.header}>
			<div className={classes.navbar}>
				<button onClick={showNavHandler} className={classes['mobilenav-btn']}>
					<MenuIcon />
				</button>
				<a href="#" className={classes.logo}>sneakers</a>
            <Navigation  onCloseNav={closeNavHandler} showNav={showNav} />
			</div>
			<div className={classes['user-panel']}>
				<button onClick={showCartHandler} className={classes['cart-btn']}>
					<CartIcon />
					{(cartCtx.items !== "") && <div className={classes['cart-items']}><p>{cartCtx.items.quantity}</p></div>}
				</button>
				<button>
					<img src={avatar} alt="" className={classes.avatar}/>
				</button>
			</div>
			{showCart && <Cart />}
		</header>
	);
};
export default Header;
