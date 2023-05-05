import Library from "../lib/Mylib";
import classes from "./layout/YourLibrary.module.css";

function LibPage() {
  return (
    <div className={classes.library}>
      <Library />
    </div>
  );
}

export default LibPage;
