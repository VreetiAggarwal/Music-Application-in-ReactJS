import React from "react";
import Slider from "infinite-react-carousel";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Card from "./Card";
import classes from "./Content.module.css";
import stay from "../images/stay.jpg";
import gazette from "../images/gazette.jpg";
import girl from "../images/girl.jpg";
import animeboy from "../images/animeboy.jpg";
import cat from "../images/cat.jpg";
import leejongsuk from "../images/leejongsuk.jpg";
import kyaa from "../images/kyaa.jpg";
import yup from "../images/Yup.jpg";
import Playcard from "./PlayCard";

function Play() {
  const breakPoints = [{ width: 1200, itemsToShow: 4 }];
  return (
    <div className={classes.playlist}>
      <Carousel pagination={false} breakPoints={breakPoints}>
        <Item className={classes.item}>
          <Playcard img={animeboy} song="Never Loved Me" artist="HelX" />
        </Item>
        <Item className={classes.item}>
          <Playcard
            img={gazette}
            song="Filth in the Beauty"
            artist="The Gazette"
          />
        </Item>
        <Item className={classes.item}>
          <Playcard img={girl} song="愛" artist="Maki" />
        </Item>
        <Item className={classes.item}>
          <Playcard img={leejongsuk} song="My love for you" artist="LJS" />
        </Item>
        <Item className={classes.item}>
          <Playcard img={stay} song="If only you knew" artist="Alacia" />
        </Item>
        <Item className={classes.item}>
          <Playcard img={cat} song="Today" artist="Rolling" />
        </Item>
        <Item className={classes.item}>
          <Playcard img={kyaa} song="Crazy" artist="Avlo" />
        </Item>
        <Item className={classes.item}>
          <Playcard img={yup} song="Daybreak" artist="Day" />
        </Item>
      </Carousel>
    </div>
  );
}

export default Play;
