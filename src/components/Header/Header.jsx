import { useState } from "react";
import classes from "./Header.module.css";
import menuBtn from "../../images/icon-menu.svg";
import cartBtn from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

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
				<button onClick={showNavHandler} className={classes['mobile-btn']}>
					<img src={menuBtn} alt="" />
				</button>
				<a href="#" className={classes.brand}>sneakers</a>
            <Navigation  onCloseNav={closeNavHandler} showNav={showNav} />
			</div>
			<div className={classes.cart}>
				<button>
					<img src={cartBtn} alt="" />
				</button>
				<button>
					<img src={avatar} alt="" className={classes.avatar}/>
				</button>
			</div>
		</div>
	);
};
export default Header;
