import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function MusxHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.h1}>MusX</div>
      <div className={classes.headerflex}>
        <Link to="/" className={classes.h2}>
          Home
        </Link>
        <Link to="favorite" className={classes.h2}>
          Favorite
        </Link>
        {/* <Link to="library" className={classes.h2}>
          Your Library
        </Link> */}
        <Link to="profile" className={classes.h2}>
          Profile
        </Link>
        <Link to="merch" className={classes.h2}>
          Merchandise
        </Link>
        <Link to="login" className={classes.h2}>
          LogIN
        </Link>
      </div>
    </header>
  );
}
export default MusxHeader;
