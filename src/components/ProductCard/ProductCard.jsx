import { useState, useContext } from "react";
import classes from "./ProductCard.module.css";

import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import Gallery from "../Gallery/Gallery";
import Button from "../UI/Button/Button";
import Lightbox from "../Lightbox/Lightbox";
import CartContext from "../../store/CartContext";

const ProductCard = () => {
	const cartCtx = useContext((CartContext));
	const [showLightbox, setShowLightbox] = useState(false);
	const [clickedImg, setClickedImg] = useState();

	const [quantity, setQuantity] = useState(0)

	const showLightboxHandler = (imgIndex) => {
		if (window.innerWidth > 768) {
			setClickedImg(imgIndex);
			setShowLightbox(true);
		}
	};
	const closeLightboxHandler = () => {
		setShowLightbox(false);
	};

	const IncreaseQuantity = () => {
		setQuantity(prev => prev + 1)
	}
	const DecreaseQuantity = () => {
		if (quantity > 0) {
			setQuantity(prev => prev - 1)
		}
	}
	const addToCartHandler = () => {
		cartCtx.addItem(quantity);
		setQuantity(0)
	}
	return (
		<div className={classes["product-card"]}>
			<div className={classes["gallery-box"]}>
				<Gallery
					indexOfInitialPhoto={0}
					onClick={showLightboxHandler}
				/>
			</div>
			{showLightbox && (
				<Lightbox
					open={showLightbox}
					onCloseLightbox={closeLightboxHandler}
					indexOfInitialPhoto={clickedImg}
				/>
			)}
			<div className={classes["product-summary"]}>
				<p className={classes.brand}>sneaker company</p>
				<h1 className={classes.heading}>Fall Limited Edition Sneakers</h1>
				<p className={classes.description}>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they'll withstand everything
					the weather can offer.
				</p>
				<div className={classes["price-box"]}>
					<p className={classes.price}>
						$125.00 <span className={classes.discount}>50%</span>
					</p>
					<p className={classes["prev-price"]}>$250.00</p>
				</div>
				<div className={classes.action}>
					<div className={classes["amount-box"]}>
						<button onClick={DecreaseQuantity}>
							<MinusIcon />
						</button>
						<p>{quantity}</p>
						<button onClick={IncreaseQuantity}>
							<PlusIcon />
						</button>
					</div>
					<Button onClick={addToCartHandler} className={classes["cart-btn"]}>
						<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
								fill="#ffffff"
								// fill-rule="nonzero"
							/>
						</svg>{" "}
						Add to cart
					</Button>
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
