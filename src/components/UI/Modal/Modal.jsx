import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Modal = ({ children, open, onClose }) => {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if (open) {
            modal.showModal();
        }
    }, [open])

    return createPortal(<dialog ref={dialog} className={classes.modal} onClose={onClose}>{children}</dialog>, document.getElementById('modal'))
}
export default Modal;