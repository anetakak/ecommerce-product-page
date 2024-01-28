import { useState } from "react";
import classes from "./Gallery.module.css";
import PrevIcon from "../../components/UI/Icons/PrevIcon";
import NextIcon from "../../components/UI/Icons/NextIcon";

const Gallery = ({
	indexOfInitialPhoto,
	onClick,
	images,
	thumbnails,
	lightbox,
}) => {
	const [currentImgIndex, setCurrentImgIndex] = useState(indexOfInitialPhoto);

	const imgArr = images;
	const thumbnailsArr = thumbnails;

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
	const showLightboxHandler = (currentImgIndex) => {
		onClick(currentImgIndex);
	};
	return (
		<>
			<div
				className={
					lightbox
						? `${classes["lightbox-gallery"]} + ${classes.gallery}`
						: `${classes.gallery}`
				}
				onClick={() => showLightboxHandler(currentImgIndex)}>
				<img
					src={`./ecommerce-product-page/src/assets/${imgArr[currentImgIndex]}`}
					alt="photo of shoes"
					className={classes.image}
				/>
				<button
					onClick={prevImgHandle}
					className={
						lightbox
							? `${classes.arrow} + ${classes["lightbox-arrow"]} + ${classes["prev-arrow"]}`
							: `${classes.arrow} + ${classes["prev-arrow"]}`
					}>
					<PrevIcon />
				</button>
				<button
					onClick={nextImgHandle}
					className={
						lightbox
							? `${classes.arrow} + ${classes["lightbox-arrow"]} + ${classes["next-arrow"]}`
							: `${classes.arrow} + ${classes["next-arrow"]}`
					}>
					<NextIcon />
				</button>
			</div>
			<div className={classes.thumbnails}>
				{thumbnailsArr.map((item, index) => (
					<button
						className={
							currentImgIndex === index
								? `${classes["thumbnail-item"]} + ${classes["thumbnail-item--active"]}`
								: `${classes["thumbnail-item"]}`
						}
						key={index}
						onClick={() => chooseImgHandle(index)}>
						<img
							src={`https://github.com/anetakak/ecommerce-product-page/blob/main/src/${item}`}
							alt="thumbnail of shoes"
							className={
								currentImgIndex === index
									? `${classes["thumbnail-img"]} + ${classes["thumbnail-img--active"]}`
									: `${classes["thumbnail-img"]}`
							}
						/>
					</button>
				))}
			</div>
		</>
	);
};
export default Gallery;
