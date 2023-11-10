import React from "react";

const Card = ({ children, variant2 }) => {
  return (
    <div className={`block p-6 ${variant2 ? "card2" : "card"} rounded-lg `}>
      {children}
    </div>
  );
};

export default Card;
