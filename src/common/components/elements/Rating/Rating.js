import React from "react";
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Rating = ({rating, color, text}) => {
  return (
    <>
      <div style={{color: '#ffd700'}}>

        <FontAwesomeIcon icon={rating >= 1 ? faStar : rating >= 0.5 ? faStarHalfAlt : ''} />
        <FontAwesomeIcon icon={rating >= 2 ? faStar : rating >= 1.5 ? faStarHalfAlt : ''} />
        <FontAwesomeIcon icon={rating >= 3 ? faStar : rating >= 2.5 ? faStarHalfAlt : ''} />
        <FontAwesomeIcon icon={rating >= 4 ? faStar : rating >= 3.5 ? faStarHalfAlt : ''} />
        <FontAwesomeIcon icon={rating >= 5 ? faStar : rating >= 4.5 ? faStarHalfAlt : ''} />
      </div>
      <span style={{marginLeft: '5px'}}>
      {text} {text > 1 ? "reviews" : "review"}
    </span>
    </>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
