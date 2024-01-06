import classes from "./Gallery.module.css";
import prevArrow from "../../images/icon-previous.svg";
import nextArrow from "../../images/icon-next.svg";
import data from "../../images/images.json"

const Gallery = () => {
	return (
		<div className="gallery">
            {data.data.map((item) => (
                <img src={`http://anetakak.github.io/ecommerce-product-page/ + ${item.url}`} alt="" />
            ))}
			<button>
				<img src={prevArrow} alt="" />
			</button>
			<button>
				<img src={nextArrow} alt="" />
			</button>
		</div>
	);
};
export default Gallery;
