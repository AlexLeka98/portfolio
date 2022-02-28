import React, { useRef, useState } from 'react'
import styles from './Contact.module.scss'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import Input from '../UI/Input'
import emailjs from '@emailjs/browser';


const Contact = (props) => {
    
    emailjs.init("bwjqZneQ23v-mbltB");
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const detailsRef = useRef();
    const formRef = useRef();
    const sendEmail = (event) => {
        event.preventDefault();
        let info = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            details: detailsRef.current.value,
        }
        console.log(formRef.current);
        emailjs.sendForm('service_sb5jngg', 'template_tfkjo7m', info)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Modal onModalHandler={props.toggleModal}>

            <div className={styles.contactContainer}>

                <h4>Contact</h4>
                <form ref={formRef} onSubmit={sendEmail}>
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
                    <Button>Send</Button>
                </form>
            </div>
        </Modal>
    )
}

export default Contact