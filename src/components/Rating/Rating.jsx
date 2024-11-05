import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars({rating}) {

    const firstExample = {
        size: 30,
        value: rating,
        edit: false
      };

    return (
      <div>
        <ReactStars {...firstExample} />
      </div>
    );
  }