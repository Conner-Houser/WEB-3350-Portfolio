import React, { useState } from "react";
import classes from "./Modal.module.css";
import PortfolioPage from "../Pages/Portfolio";
// import CarDeal from '../Images/CarDealWeb.png';

function CarDealModal() {

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
          {/* <img src="CarDealWeb.png" alt="CarDeal Home page" /> */}
            <h2>CarDeal</h2>
            <p>
              CarDeal is a single page website created using HTML5, CSS, SCSS, and Bootstrap. The goal of this website is to help people buy and sell their used cars.
              When first loading into the page there is a form within the hero section to get an offer on your car. throughout the page you can also find elements such
              as Testimonial to see reviews by customers, A FAQ section to answer questions and a display of cars that have recenlty been purchased thorugh the website.
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

export default CarDealModal;