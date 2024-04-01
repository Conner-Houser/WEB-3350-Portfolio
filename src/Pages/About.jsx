import classes from "./About.module.css"
import img1 from '../Images/ConnerHouserPfp.png';

function AboutPage () {
    return (
    <>
    <div className={classes.mainInfo}>
        <h1>About me</h1>
        <img src={img1} alt="Conner Houser Profile picture" />
        <h1>User Interface Desiner & Developer</h1>
        <p>
            Hello!  My name is Conner Houser and i’m a web developer and designer<br/>
            based in the USA working towards making accessible websites and apps for all.<br/>
            I am currently a student at Weber State University and am working towards<br/>
            A degree In Web and Ux development with a focus on Full Stack developing.<br/>
            I am learning many coding languages such as Html, Css, SCSS, JavaScript.<br/>
            And I also enjoy working in adobe Illustrator, Photoshop, and adobeXD.<br/>
            I was born in California and moved to Utah when I was in second grade I <br/>
            love traveling and hanging out with friends and family.
        </p>
    </div>
    </>
        )

}

export default AboutPage;