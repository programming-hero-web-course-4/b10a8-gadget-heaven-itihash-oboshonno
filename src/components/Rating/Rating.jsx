import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars({rating}) {

  const [gotRating, setGotRating] = useState(0);
  useEffect(() => {
    if (rating) {
      setGotRating(rating);
    }
  }, [])

    const myStars = {
        size: 30,
        value: gotRating,
        edit: false
      };

    return (
      <div>
        <ReactStars {...myStars} />
      </div>
    );
  }