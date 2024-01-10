import { useState } from "react";
import classes from "./Gallery.module.css";
import PrevIcon from "../../components/UI/Icons/PrevIcon";
import NextIcon from "../../components/UI/Icons/NextIcon";

import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";
import Lightbox from "../Lightbox/Lightbox";

const Gallery = () => {
	const imgArr = [img1, img2, img3, img4];
	const [currentImgIndex, setCurrentImgIndex] = useState(0);
	const thumbnailsArr = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

	const [showLightbox, setShowLightbox] = useState(false)

	const nextImgHandle = () => {
		if (currentImgIndex === imgArr.length - 1) {
			setCurrentImgIndex(0);
		} else {
			setCurrentImgIndex((prev) => prev + 1);
		}
	};
	const prevImgHandle = () => {
		if (currentImgIndex === 0) {
			setCurrentImgIndex(imgArr.length - 1);
		} else {
			setCurrentImgIndex((prev) => prev - 1);
		}
	};
	const chooseImgHandle = (index) => {
		setCurrentImgIndex(index);
	};
	const showLightboxHandler = () => {
		setShowLightbox(true);
		console.log('show lightbox');
	}
	const closeLightboxHandler = () => {
		setShowLightbox(false);
	}
	return (
		<div className={classes.wrapper}>
			{showLightbox && <Lightbox open={showLightbox} onCloseLightbox={closeLightboxHandler} />}
			<div className={classes.gallery} onClick={showLightboxHandler}>
				<img
					src={imgArr[currentImgIndex]}
					alt="photo of shoes"
					className={classes.image}
				/>
				<button
					onClick={prevImgHandle}
					className={`${classes.arrow} + ${classes["prev-arrow"]}`}>
					<PrevIcon />
				</button>
				<button
					onClick={nextImgHandle}
					className={`${classes.arrow} + ${classes["next-arrow"]}`}>
					<NextIcon />
				</button>
			</div>
			<div className={classes.thumbnails}>
				{thumbnailsArr.map((item, index) => (
					<div
						className={
							currentImgIndex === index
								? `${classes["thumbnail-item"]} + ${classes["thumbnail-item--active"]}`
								: `${classes["thumbnail-item"]}`
						}
						key={index}
						onClick={() => chooseImgHandle(index)}>
						<img
							src={item}
							alt=""
							className={
								currentImgIndex === index
									? `${classes["thumbnail-img"]} + ${classes["thumbnail-img--active"]}`
									: `${classes["thumbnail-img"]}`
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
export default Gallery;
