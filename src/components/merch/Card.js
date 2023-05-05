import { useState } from "react";
import classes from "./Merch.module.css";

export default function (props) {
  const [count, setCount] = useState(0);
  // setCount(count + 100); //default amount
  // let percent = count / 100;
  // let discount = `${props.amount}`;

  return (
    <div>
      <div className={classes.card}>
        <button className={classes.cardbtn}>
          <img className={classes.cardimg} src={props.img} />
          <h1 className={classes.cardtitle}>{props.title}</h1>
          <h1 className={classes.cardartist}>{props.artist}</h1>
          <h1 className={classes.cardamount}>{props.amount}</h1>
          {/* <div>
            <h1 className={classes.cardamount}>{discount}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={classes.coinicon}
            >
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
            </svg>
          </div> */}
        </button>
      </div>
    </div>
  );
}
