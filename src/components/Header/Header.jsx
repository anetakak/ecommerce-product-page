import { useState } from "react";
import classes from "./Header.module.css";
import avatar from "../../images/image-avatar.png";

import MenuIcon from "../UI/Icons/MenuIcon";
import CartIcon from "../UI/Icons/CartIcon";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const showNavHandler = () => {
        setShowNav(true);
    }
    const closeNavHandler = () => {
        setShowNav(false)
    }
	return (
		<div className={classes.header}>
			<div className={classes.navbar}>
				<button onClick={showNavHandler} className={classes['mobilenav-btn']}>
					<MenuIcon />
				</button>
				<a href="#" className={classes.logo}>sneakers</a>
            <Navigation  onCloseNav={closeNavHandler} showNav={showNav} />
			</div>
			<div className={classes['user-panel']}>
				<button className={classes['cart-btn']}>
					<CartIcon />
				</button>
				<button>
					<img src={avatar} alt="" className={classes.avatar}/>
				</button>
			</div>
		</div>
	);
};
export default Header;
