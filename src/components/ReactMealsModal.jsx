import React, { useState } from "react";
import classes from "./Modal.module.css";
import PortfolioPage from "../Pages/Portfolio";
//import ReactMealsWeb from '../Images/React-meals-Web.png';

function SweetPeaAndSawdustModal() {


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
            {/* <img src="ReactMealsWeb" alt="React Meals Home page" /> */}
            <h2>React Meals</h2>
            <p>
                React Meals is a React JavaScript app that was created to order food online and get it delivered to your house. In the app you are able to add items to your cart where you can then see the price and enter your information within a form to get it delivered.
                This form also contains feedback to let users know if they are entering viable information.
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

export default SweetPeaAndSawdustModal;