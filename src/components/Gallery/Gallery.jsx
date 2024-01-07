import { useState } from "react";
import classes from "./Gallery.module.css";
import prevArrow from "../../images/icon-previous.svg";
import nextArrow from "../../images/icon-next.svg";
import data from "../../images/images.json";
import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";

const Gallery = () => {
	const imgArr = [img1, img2, img3, img4];
	const [currentImgIndex, setCurrentImgIndex] = useState(0);

	const nextImgHandle = () => {
        if (currentImgIndex === (imgArr.length - 1)) {
            setCurrentImgIndex(0);
        } else {
            setCurrentImgIndex((prev) => prev + 1)
        }
	};
	const prevImgHandle = () => {
        if (currentImgIndex === 0) {
            setCurrentImgIndex(imgArr.length - 1);
        } else {
            setCurrentImgIndex((prev) => prev - 1)
        }
	};
	return (
		<div className={classes.wrapper}>
			<div className={classes.gallery}>
				<img
					src={imgArr[currentImgIndex]}
					alt="photo of shoes"
					className={classes.image}
				/>
				{/* <img src={img1} alt="" className={classes.image} />
				<img src={img2} alt="" className={classes.image} />
				<img src={img3} alt="" className={classes.image} />
				<img src={img4} alt="" className={classes.image} /> */}
				<button onClick={prevImgHandle} className={`${classes.arrow} + ${classes["prev-arrow"]}`}>
					<img src={prevArrow} alt="" className={classes["arrow-img"]} />
				</button>
				<button
					onClick={nextImgHandle}
					className={`${classes.arrow} + ${classes["next-arrow"]}`}>
					<img src={nextArrow} alt="" className={classes["arrow-img"]} />
				</button>
			</div>
		</div>
	);
};
export default Gallery;
