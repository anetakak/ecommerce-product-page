import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Modal = ({ children, open }) => {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        }
    }, [open])

    return createPortal(<dialog ref={dialog} className={classes.modal}>{children}</dialog>, document.getElementById('modal'))
}
export default Modal;