import React from "react";
import { CardContainer } from "./index.style";

const SqlCard = (props) => {
  const data = props.data;
  return (
    <CardContainer>
      <div>
        <img src={`/images/${data.image}`} alt="" />
        <p>{data.desc}</p>
        <strong>{data.month}</strong>
      </div>
    </CardContainer>
  );
};

export default SqlCard;
