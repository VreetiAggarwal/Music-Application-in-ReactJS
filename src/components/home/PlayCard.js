import classes from "./Content.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../desc/Modal";

export default function Playcard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMortalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <button
        // to={{
        //   pathname: `/songdesc/${props.song}`,
        //   state: {
        //     song: "hello",
        //   },
        // }}
        className={classes.btn}
        onClick={deleteHandler}
      >
        <div>
          <img src={props.img} />
          <button className={classes.btn2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={classes.icon3}
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className={classes.info}>
            <span>{props.song}</span>
            <div className={classes.artist}>{props.artist}</div>
          </div>
        </div>
      </button>
      {modalIsOpen && (
        <Modal onSubscribe={closeMortalHandler} onCancel={closeMortalHandler} />
      )}
    </div>
  );
}
