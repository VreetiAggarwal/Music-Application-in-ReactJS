import React, { useState } from "react";
import classes from "./Discover.module.css";
import Carousel from "react-elastic-carousel";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";

function DiscoverNew() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMortalHandler() {
    setModalIsOpen(false);
  }

  const [isShowing, setIsShowing] = useState(false);
  return (
    <section className={classes.discover}>
      <div className={classes.globalflex}>
        <div className={classes.flex}>
          <span>
            <h1 className={classes.heading}>LISTEN</h1>
          </span>
          <span>
            <h1 className={classes.heading2}>ANYTIME</h1>
            <h1 className={classes.heading2}>ANYWHERE</h1>
          </span>
        </div>

        <button className={classes.button} onClick={deleteHandler}>
          <div>START FREE TRIAL</div>
        </button>

        {modalIsOpen && (
          <Modal
            onSubscribe={closeMortalHandler}
            onCancel={closeMortalHandler}
          />
        )}
        {modalIsOpen && <Backdrop onCancel={closeMortalHandler} />}
      </div>
      <div className={classes.globalflex2}>
        <div
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
        ></div>
      </div>
    </section>
  );
}

export default DiscoverNew;
