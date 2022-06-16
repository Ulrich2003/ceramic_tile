import React from "react";
import "./ImgCard.css";

export const ImgCard = (props) => {

  let {content,src} = props.data
  console.log(1,props);
  return (
    <div className="ImgCard">
      <img src={src} />
      <p>
        {content}
      </p>
    </div>
  );
};
