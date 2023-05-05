import { useState } from "react";
import classes from "./Card.module.css";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Library(props) {
  const [{ items }, setItems] = useState({ items: [] });
  const addItem = () => {
    items.push(
      <div className={classes.grid} key={items.length}>
        <Card title="Mylist Name" />
      </div>
    );
    setItems({ items: [...items] });
  };

  return (
    <div>
      <div className={classes.play}>
        <Link to="/favorite">
          <div className={classes.list}>
            <button className={classes.flex}>
              <div className={classes.card}>
                <h1 className={classes.text}>Playlist</h1>
              </div>
              <div className={classes.desc}>
                <h1 className={classes.text1}>
                  Your Liked songs will appear here!
                </h1>
              </div>
            </button>
          </div>
        </Link>

        <div>
          <Link
            to={{
              pathname: `/favorite/${props.id}`,
            }}
          >
            {items}
          </Link>
          <button className={classes.btn} onClick={addItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={classes.icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
