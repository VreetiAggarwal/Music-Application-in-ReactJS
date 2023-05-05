import Play from "./Playlist";
import classes from "./Content.module.css";
import animeboy from "../images/animeboy.jpg";

function ContentBody() {
  return (
    <div>
      <h1 className={classes.h1}>DISCOVER NEW ARTISTS</h1>
      <div className={classes.play}>
        <Play img={animeboy} />
      </div>
      <h1 className={classes.h1}>TOP TRENDING</h1>
      <div className={classes.play}>
        <Play />
      </div>
      <h1 className={classes.h1}>MusX PLAYLIST</h1>
      <div className={classes.play}>
        <Play />
      </div>
      <div className={classes.genre}>
        <h1 className={classes.h1}>MOOD</h1>
        <div className={classes.play}>
          <Play />
        </div>
      </div>
    </div>
  );
}

export default ContentBody;
