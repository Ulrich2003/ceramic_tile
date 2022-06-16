import React from "react";
import { ImgCard } from "../ImgCard/ImgCard";
import "./Body.css";

export const Body = () => {
  let dataList = [
    {
      id: 0,
      content:
        "这是一条很长很长很长很长很长很长长很长很长长很长很长长很长很长长很长很长很长很长很长的描述",
      src: "https://images.unsplash.com/photo-1641382368446-9ec0f0fb9429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div>
      <ul>
        {dataList.map((item,index) => {
          console.log(item);
          <li>
            <ImgCard data={dataList[index]} />;
          </li>;
        })}
      </ul>
    </div>
  );
};
