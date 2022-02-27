import styles from './Modal.module.scss';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return <div className={styles.backdrop}>{props.children}</div>
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <button onClick={props.onModalHandler} className={styles.closeModal}></button>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    const modalIsOpen = true;
    return (
        <Fragment>
            {modalIsOpen && ReactDOM.createPortal(
                <Backdrop>
                    <ModalOverlay onModalHandler={props.onModalHandler}>{props.children}</ModalOverlay>
                </Backdrop>,
                portalElement)}
        </Fragment>
    )
}


export default Modal