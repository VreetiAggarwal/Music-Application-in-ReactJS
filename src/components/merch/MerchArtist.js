import { SvgBlob } from "react-svg-blob";
import guitar from "../images/guitar.jpg";
import classes from "./Merch.module.css";
import Card from "./Card";
import gazettemerch from "../images/gazettemerch.jpg";
import nirvana from "../images/ac.jpg";
import acdc from "../images/nirvana.jpg";
import shirt from "../images/guitarpick.jpg";
import guitarpick from "../images/shirt.jpg";
import charm from "../images/charm.jpg";

export default function MerchandiseArtist() {
  return (
    <div>
      <div className={classes.flex}>
        <div>
          <h1 className={classes.h1}>OFFICIAL</h1>
          <h1 className={classes.h2}>MERCHANDISE</h1>
          <h1 className={classes.h3}>
            Now your favorite official merchandise at one place! Earn coins and
            get a discount on your favorite official merchandise!
          </h1>
        </div>
        <div>
          <SvgBlob
            variant="solid"
            color="rgba(255, 141, 160, 0.23)"
            className={classes.solid}
          />
          ;
          <SvgBlob variant="image" image={guitar} className={classes.blob} />
        </div>
      </div>
      <div className={classes.searchform}>
        <form className={classes.flex2}>
          {/* <label className={classes.searchtext}>Search</label> */}
          <input
            type="text"
            placeholder="Search here for your favorite artist or their official merchandise."
            className={classes.searchbar}
          />
          <div>
            <button className={classes.btnicon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={classes.icon}
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className={classes.h4}>TOP PICKS</h1>
        <div className={classes.flex3}>
          <Card
            img={gazettemerch}
            title="The Gazette shirt (M)"
            artist="the Gazette"
            amount="₹3,599"
          />

          <Card
            img={nirvana}
            title="Nirvana shirt (L)"
            artist="nirvana"
            amount="₹7,599"
          />

          <Card
            img={acdc}
            title="AC/DC shirt (M)"
            artist="AC/DC"
            amount="₹6,599"
          />
        </div>
      </div>

      <div>
        <h1 className={classes.h4}>NEW ARRIVALS</h1>
        <div className={classes.flex3}>
          <Card
            img={charm}
            title="Linkin Park Necklace"
            artist="Linkin Park"
            amount="₹1,599"
          />

          <Card
            img={shirt}
            title="Makeskik shirt (L)"
            artist="makeskik"
            amount="₹3,000"
          />

          <Card
            img={guitarpick}
            title="Guitar pick necklace"
            artist="the Gazette"
            amount="₹8,599"
          />
        </div>
      </div>
    </div>
  );
}
