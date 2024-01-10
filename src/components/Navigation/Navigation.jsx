import classes from "./Navigation.module.css";
import CloseIcon from "../UI/Icons/CloseIcon";

const Navigation = ({ onCloseNav, showNav }) => {
	const closeNavHandler = () => {
		onCloseNav();
	};
	return (
		<div className={showNav ? `${classes.nav} + ${classes.active}` : `${classes.nav}`}>
			<div className={classes.backdrop}></div>
			<div className={classes.navigation}>
				<button onClick={closeNavHandler} className={classes['closenav-btn']}>
					<CloseIcon />
				</button>
				<ul>
					<li>
						<a href="#" className={classes["nav-item"]} onClick={closeNavHandler}>
							Collections
						</a>
					</li>
					<li>
						<a href="#" className={classes["nav-item"]} onClick={closeNavHandler}>
							Men
						</a>
					</li>
					<li>
						<a href="#" className={classes["nav-item"]} onClick={closeNavHandler}>
							Woman
						</a>
					</li>
					<li>
						<a href="#" className={classes["nav-item"]} onClick={closeNavHandler}>
							About
						</a>
					</li>
					<li>
						<a href="#" className={classes["nav-item"]} onClick={closeNavHandler}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navigation;
