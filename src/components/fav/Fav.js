import { useState } from "react";
import Card from "./Card";
import classes from "./Fav.module.css";
import Modal from "./Modal";
import animeboy from "../images/animeboy.jpg";
import lee from "../images/leejongsuk.jpg";

export default function Favorite() {
  const [{ items }, setItems] = useState({ items: [] });
  const [change, setChange] = useState(false);
  const [count, setCount] = useState(3);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMortalHandler() {
    setModalIsOpen(false);
  }

  const addItem = () => {
    setCount(count + 1);
    items.push(
      <div key={items.length}>
        <Card number={count} />
      </div>
    );
    setItems({ items: [...items] });
  };
  return (
    <div>
      <h1 className={classes.title}>YOUR LIKED SONGS</h1>
      <button className={classes.click} onClick={deleteHandler}>
        <div className={classes.flex}>
          <div className={classes.infoflex}>
            <h1 className={classes.h3}>1.</h1>
            <img className={classes.img} src={animeboy} />
            <div>
              <h1 className={classes.h1}>Never Loved Me</h1>
              <h1 className={classes.h2}>HelX</h1>
            </div>
          </div>

          <div className={classes.iconflex}>
            {change ? (
              <button
                className={classes.btn}
                onClick={() => {
                  setChange(!change);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={classes.icon2}
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5zm4 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                className={classes.btn}
                onClick={() => {
                  setChange(!change);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={classes.icon2}
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            )}
            <button className={classes.btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={classes.icon3}
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>

            <button className={classes.btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={classes.icon3}
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </button>

      <button className={classes.click} onClick={deleteHandler}>
        <div className={classes.flex}>
          <div className={classes.infoflex}>
            <h1 className={classes.h3}>2.</h1>
            <img className={classes.img} src={lee} />
            <div>
              <h1 className={classes.h1}>My love for you</h1>
              <h1 className={classes.h2}>LJS</h1>
            </div>
          </div>

          <div className={classes.iconflex}>
            {change ? (
              <button
                className={classes.btn}
                onClick={() => {
                  setChange(!change);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={classes.icon2}
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5zm4 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                className={classes.btn}
                onClick={() => {
                  setChange(!change);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={classes.icon2}
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            )}
            <button className={classes.btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={classes.icon3}
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>

            <button className={classes.btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={classes.icon3}
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </button>

      <div>
        <button className={classes.click} onClick={deleteHandler}>
          {items}
        </button>
        <button className={classes.btn1} onClick={addItem}>
          ADD MORE SONGS TO FAVORITE
        </button>
      </div>
      {modalIsOpen && (
        <Modal onSubscribe={closeMortalHandler} onCancel={closeMortalHandler} />
      )}
    </div>
  );
}
