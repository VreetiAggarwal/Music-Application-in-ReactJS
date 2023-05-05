import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function subscribeHandler() {
    props.onSubscribe();
  }

  return (
    <div className={classes.modal}>
      <p className={classes.para}>START FREE TRIAL?</p>
      <Link to="/login">
        <button className={classes.button} onClick={subscribeHandler}>
          Subscribe
        </button>
      </Link>
      <button className={classes.button} onClick={cancelHandler}>
        Cancel
      </button>
      <p className={classes.para2}>
        Already a member? <a href="#">Log IN</a>
      </p>
    </div>
  );
}

export default Modal;
