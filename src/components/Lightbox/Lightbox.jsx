import classes from "./Lightbox.module.css";
import Modal from "../UI/Modal/Modal";
import CloseIcon from "../UI/Icons/CloseIcon";
import Gallery from "../Gallery/Gallery";

const Lightbox = ({ open, onCloseLightbox, indexOfInitialPhoto }) => {
	const closeLightboxHandler = () => {
		onCloseLightbox();
	};
const someFn = () => {
	return
}
	return (
		<Modal open={open}>
			<div className={classes.lightbox}>
				<button onClick={closeLightboxHandler} className={classes["close-btn"]}>
					<CloseIcon />
				</button>
				<Gallery indexOfInitialPhoto={indexOfInitialPhoto} onClick={someFn} />
			</div>
		</Modal>
	);
};
export default Lightbox;
