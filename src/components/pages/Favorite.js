import Favorite from "../fav/Fav";
import classes from "./layout/Favorite.module.css";
function FavPage() {
  return (
    <div className={classes.fav}>
      <Favorite />
    </div>
  );
}

export default FavPage;
