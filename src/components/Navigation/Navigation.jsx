import classes from "./Navigation.module.css";
import CloseIcon from "../UI/Icons/CloseIcon";

const Navigation = ({ onCloseNav, showNav }) => {
	const closeNavHandler = () => {
		onCloseNav();
	};
	return (
		<nav>
			<div className={showNav ? `${classes.backdrop} + ${classes["show-backdrop"]}` : `${classes.backdrop}`}></div>
			<div className={showNav ? `${classes.navigation} + ${classes["show-navigation"]}` : `${classes.navigation}`}>
				<button onClick={closeNavHandler} className={classes["closenav-btn"]}>
					<CloseIcon />
				</button>
				<ul>
					<li>
						<a
							href="#"
							className={classes["nav-item"]}
							onClick={closeNavHandler}>
							Collections
						</a>
					</li>
					<li>
						<a
							href="#"
							className={classes["nav-item"]}
							onClick={closeNavHandler}>
							Men
						</a>
					</li>
					<li>
						<a
							href="#"
							className={classes["nav-item"]}
							onClick={closeNavHandler}>
							Woman
						</a>
					</li>
					<li>
						<a
							href="#"
							className={classes["nav-item"]}
							onClick={closeNavHandler}>
							About
						</a>
					</li>
					<li>
						<a
							href="#"
							className={classes["nav-item"]}
							onClick={closeNavHandler}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navigation;
