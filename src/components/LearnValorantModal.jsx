import React, { useState } from "react";
import classes from "./Modal.module.css";
import PortfolioPage from "../Pages/Portfolio";
// import LearnValorant from '../Images/LearnValorantWeb.png';

function LearnValorantModal() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className={classes.btnModal}>
        Learn More
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className={classes.overlay}></div>
          <div className={classes.modalContent}>
            {/* <img src="../Images/LearnValorantWeb.png" alt="Learn Valorant Home page" /> */}
            <h2>LearnValorant</h2>
            <p>
                Learn Valorant is a website created using HTML5, CSS, SCSS, and Bootstrap. The goal of this site is to teach users more about Valorant, with pages made for agents, maps, and wespons this site contains everything
                that someone might want know when starting the game.
            </p>
            <button className={classes.closeModal} onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default LearnValorantModal;