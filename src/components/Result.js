import React from "react";
import "./forms.css";

function Result(props) {
  return (
   
      <>
        <div className="footermain">
          {props.lists.map((a, b) => {
            return (
              <div className="footer">
                {b + 1}.Name:<span>{a.Username}</span>| Department:
                <span>{a.Department}</span>| Rating:<span>{a.rating}</span>
              </div>
            );
          })}
        </div>

        <button className="goback" onClick={props.gobacks}>Go Back</button>
      </>
   
  );
}

export default Result;