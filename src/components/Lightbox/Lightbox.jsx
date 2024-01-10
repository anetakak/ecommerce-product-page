import classes from "./Lightbox.module.css";
import Modal from "../UI/Modal/Modal";
import CloseIcon from "../UI/Icons/CloseIcon";
import Gallery from "../Gallery/Gallery";

const Lightbox = ({ open, onCloseLightbox }) => {
	const closeLightboxHandler = () => {
		onCloseLightbox();
	};

	return (
		<Modal open={open}>
			<div className={classes.lightbox}>
				<button onClick={closeLightboxHandler} className={classes["close-btn"]}>
					<CloseIcon />
				</button>
				<Gallery />
			</div>
		</Modal>
	);
};
export default Lightbox;
