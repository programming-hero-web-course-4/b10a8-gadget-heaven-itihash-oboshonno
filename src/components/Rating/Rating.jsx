import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars({specificData}) {

  const { rating } = specificData;
  const [rater, setRater] = useState(4);
  useEffect(() => {
    setRater(rating);
  }, [rating])

    const myStars = {
        size: 32,
        value: rater,
        edit: false
      };

    return (
      <div>
        <ReactStars {...myStars} />
      </div>
    );
  }