import React, { useState } from "react";
import "../styles/Rate.css";

export const Rate = () => {
  const [rating, setRating] = useState(0);
  const [hover,setHover] = useState(0);
  const [hovering,setHovering] = useState(null)

  const handleClick = (value) => {
    setRating(value);
    console.log("Clicked:", value);
  };
  const mouseHover=(star)=>{
    setHover(star);
    setHovering(true);
    console.log(`mouse hovering on star : ${hover}`)
  }
  const mouseDown =()=>{
      setHover(0);
      setHovering(false);
    console.log("mouse not hvering over star");
  }
 const Counter =()=>{
    return(
      <p> Total Ratting : {rating}</p>
    )
  }

  return (
    <div className="rating-container">
      <h3>Rate your Experience!</h3>
      <div className="star" onMouseLeave={() => mouseDown()}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
          <React.Fragment key={star}>
            <input
              type="radio"
              id={`r${star}`}
              name="rating"
              onClick={() => handleClick(star)}
            />
            <label
              htmlFor={`r${star}`}
              onMouseEnter={() => mouseHover(star)}
              className={star <= (hover || rating) ? "filled" : "unfilled"}
            >
              ★
            </label>
          </React.Fragment>
        ))}
      </div>
      <Counter/>
      
      {/* <p>Your rating: {rating}</p>
      { hovering ? (
      <p>hovering over: {hover}</p>) : (
        <p>Not Hovering Currently</p>
      )
      } */}
    </div>
  );
};
