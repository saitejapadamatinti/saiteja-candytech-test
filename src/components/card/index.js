import React from "react";
import "./index.css";

const Card = (props) => {
  const { mainHead, descriptionPara, cardDate } = props;
  return (
    <div className="card-main-container">
      <h2 className="card-main-head">{mainHead}</h2>
      <p>{descriptionPara}</p>
      <h5>{cardDate}</h5>
    </div>
  );
};

export default Card;
