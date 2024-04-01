import { Link } from "react-router-dom";
import classes from "./Portfolio.module.css"
import Modal from "../components/LearnValorantModal";
import LearnValorantModal from "../components/LearnValorantModal";
import SweetPeaAndSawdustModal from "../components/ReactMealsModal.jsx";
import CarDealModal from "../components/CarDealModal.jsx";
// import LearnValorant from '../Images/LearnValorant-Web.png';
// import ReactMealsWeb from '../Images/React-meals-Web.png';
// import CarDeal from "../Images/CarDeal-Web.PNG"


function PortfolioPage () {

    const DUMMY_DATA = [
        {
            id: "p1",
            // photo: {LearnValorant},
            projectName: "LearnValorant",
            shortDescription: "A website created to Learn about Valorant",
            modal: <LearnValorantModal/>,
        },
        {
            id: "p2",
            // photo: {ReactMealsWeb},
            projectName: "React Meals",
            shortDescription: "A app created to get food delivered to you",
            modal: <SweetPeaAndSawdustModal/>
        },
        {
            id: "p3",
            // photo: {CarDeal},
            projectName: "CarDeal",
            shortDescription: "A company that buys and sells cars",
            modal: <CarDealModal/>
        }
    ]

    return (
        <>
            <h1>View My Portfolio</h1>
            <ul>
                {DUMMY_DATA.map((project) => (
                    <li key={project.id}>
                        <div className={classes.portfolioItem}>
                            {/* <img src={project.photo} alt="Conner Houser Profile picture" /> */}
                            <h2>{project.projectName}</h2>
                            <p>{project.shortDescription}</p>
                            <p>{project.modal}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PortfolioPage;