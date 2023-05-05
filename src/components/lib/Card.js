import classes from "./Card.module.css";

export default function CardLib(props) {
  return (
    <div className={classes.list}>
      <button className={classes.flex}>
        <div className={classes.card}>
          <h1 className={classes.text}>{props.title}</h1>
        </div>
        <div className={classes.desc}>
          <h1 className={classes.text1}>Create a Description!</h1>
        </div>
      </button>
    </div>
  );
}
