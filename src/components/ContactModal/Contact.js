import React, { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.scss'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import Input from '../UI/Input'
import emailjs from '@emailjs/browser';
import Loader from '../UI/Loader'


const Contact = (props) => {

    emailjs.init("bwjqZneQ23v-mbltB");
    const [emailSuccess, setEmailSuccess] = useState({ status: undefined, message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const detailsRef = useRef();

    useEffect(() => {
        setEmailSuccess({ status: undefined, message: '' });
        setIsLoading(false);
    }, [])


    const sendEmail = (event) => {
        event.preventDefault();
        let info = {
            user_name: nameRef.current.value,
            user_surname: surnameRef.current.value,
            user_email: emailRef.current.value,
            message: detailsRef.current.value,
        }
        setIsLoading(true);
        emailjs.send('service_sb5jngg', 'template_tfkjo7m', info)
            .then((result) => {
                setIsLoading(false);
                console.log(result.text);
                setEmailSuccess({ status: true, message: 'Send successfully!' });
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                setEmailSuccess({ status: false, message: 'There has been a problem, please try again' });
                return;
            })
        nameRef.current.value = '';
        surnameRef.current.value = '';
        emailRef.current.value = '';
        detailsRef.current.value = '';
    };
    return (
        <Modal onModalHandler={props.toggleModal}>
            <div className={styles.contactContainer}>
                <h4>Contact</h4>
                <form onSubmit={sendEmail}>
                    <div>
                        <Input type='text' name='Name' ref={nameRef} required />
                        <Input type='text' name='Surname' ref={surnameRef} required />
                    </div>

                    <div>
                        <Input type='text' name='Email' ref={emailRef} required />
                    </div>

                    <div>
                        <Input type='textarea' name='Aditional details' ref={detailsRef} required />
                    </div>

                    {!isLoading && emailSuccess.message === '' && <Button>Send</Button>}
                </form>

                {isLoading && <Loader />}
                {emailSuccess.message !== '' && <p className={`${emailSuccess.status ? styles.success : styles.failure}`}>{emailSuccess.message}</p>}
            </div>
        </Modal>
    )
}

export default Contact