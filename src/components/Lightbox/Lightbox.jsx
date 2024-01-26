import classes from "./Lightbox.module.css";
import Modal from "../UI/Modal/Modal";
import CloseIcon from "../UI/Icons/CloseIcon";
import Gallery from "../Gallery/Gallery";

const Lightbox = ({ open, onCloseLightbox, ...props }) => {
	const closeLightboxHandler = () => {
		onCloseLightbox();
	};
const zoomBlockingHandler = () => {
	return
}
	return (
		<Modal open={open} onClose={closeLightboxHandler}>
			<div className={classes.lightbox}>
				<button onClick={closeLightboxHandler} className={classes["close-btn"]}>
					<CloseIcon />
				</button>
				<Gallery onClick={zoomBlockingHandler} {...props} lightbox />
			</div>
		</Modal>
	);
};
export default Lightbox;
