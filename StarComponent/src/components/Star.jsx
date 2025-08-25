import React, { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          className={rating > star ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Star;
