import "./notation.css"
import React from "react";

export default function RatingBar({ location }) {
  const rating = location.rating;
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  const filledStarsJsx = [];
  for (let i = 0; i < filledStars; i++) {
    filledStarsJsx.push(<i key={i} className="fas fa-star redStar"></i>);
  }

  const emptyStarsJsx = [];
  for (let i = 0; i < emptyStars; i++) {
    emptyStarsJsx.push(<i key={i} className="fas fa-star greyStar"></i>);
  }

  return (
    <div className="rating-bar">
      {filledStarsJsx}
      {emptyStarsJsx}
    </div>
  );
}

