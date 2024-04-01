import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation(){
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About me</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;