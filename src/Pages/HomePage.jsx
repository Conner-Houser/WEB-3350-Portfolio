import { Link } from "react-router-dom";
import React from "react";
import img1 from '../Images/ConnerHouserPfp.png';
import classes from "./HomePage.module.css"

function HomePage () {
    return (
        <>
        <div className={classes.body}>
            
            <div className={classes.mainInfo}>
                <h1>Welcome to my Portfolio App!</h1>
                <p>
                    Hello!  I’m Conner,  A web developer and designer
                    based in the USA working towards making 
                    accessible websites and apps for all. This app was
                    created with React JavaScript to showcase my skills as a 
                    developer so far. Above is a navigation to learn more
                    about me and my work. If you would like to get in touch with me
                    please do so using the "Contact me" page. Thank you!
                </p>
            </div>
        </div>
        </>
    )
}

export default HomePage;