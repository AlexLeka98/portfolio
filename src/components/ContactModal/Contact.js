import React, { useRef, useState } from 'react'
import styles from './Contact.module.scss'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import Input from '../UI/Input'
// import emailjs from '@emailjs/browser';

const Contact = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('Hey there!');
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    return (
        <Modal onModalHandler={props.toggleModal}>

            <div className={styles.contactContainer}>

                <h1>Contact</h1>
                <form onSubmit={sendEmail}>
                    <div>
                        <Input type='text' name='Name' required />
                        <Input type='text' name='Surname' required />
                    </div>

                    <div>
                        <Input type='email' name='Email' required />
                    </div>

                    <div>
                        <Input type='textarea' name='Aditional details' required />
                    </div>
                    <Button>Send</Button>
                </form>
            </div>
        </Modal>
    )
}

export default Contact