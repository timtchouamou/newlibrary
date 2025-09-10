import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = (book) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}

      {/* {Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt" />} */}
      {Number.isInteger(book.rating) ? (
        ""
      ) : (
        <FontAwesomeIcon icon="star-half-alt" />
      )}
      <>
        <div className="book__ratings">
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star-half-alt" />
        </div>
      </>
    </div>
  );
};
export default Rating;
