import classes from "./Contact.module.css";
import { useRef, useState } from "react";

const isEmpty = value => value.trim() === "";

function ContactPage (props) {
    
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        email: true,
        message: true,
    });

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = !isEmpty(enteredEmail);
        const enteredMessageIsValid = !isEmpty(enteredMessage);

        

        setFormInputValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            message: enteredMessageIsValid,
        })

        const formIsValid = 
            enteredNameIsValid && 
            enteredEmailIsValid && 
            enteredMessageIsValid;

        if(!formIsValid) {
            return;
        }

        const data = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
        }

        fetch("https://portfolio-app-contact-default-rtdb.firebaseio.com/contact.json", 
        {
            method: "POST",
            body: JSON.stringify ({
                user: data,
            })
        })

        console.log(data)
    }


    


    return (
        <>
            <form type="submit" onSubmit={confirmHandler}>
                <div className={`${classes.control} ${formInputValidity.name ? "" : classes.invalid}`}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" ref={nameInputRef}/>
                    {!formInputValidity.name && <p>Please enter a valid name!</p>}
                </div>
                <div className={`${classes.control} ${formInputValidity.email ? "" : classes.invalid}`}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" ref={emailInputRef}/>
                    {!formInputValidity.name && <p>Please enter a valid email!</p>}
                </div>
                <div className={`${classes.control} ${formInputValidity.message ? "" : classes.invalid}`}>
                    <label htmlFor="message">Message</label>
                    <input row="5" type="text" id="message" ref={messageInputRef}/>
                    {!formInputValidity.name && <p>Please enter a valid message!</p>}
                </div>
                <div className={classes.actions}>
                <button>Send</button>
                </div>
                
            </form>
        </>
    )
}

export default ContactPage;