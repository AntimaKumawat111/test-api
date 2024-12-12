import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="card">
      <label>
        <img src="https://www.shutterstock.com/image-photo/api-application-programming-interface-concept-260nw-2377219927.jpg" alt="" id="api_Image" />
        <h4 id="title">{props.title} </h4>
        <p id="data" >{props.body}</p>
        <p>{props.id}</p>
      </label>
    </div>
  );
}

export default Card;
