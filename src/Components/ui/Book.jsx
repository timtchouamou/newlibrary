import React, { useEffect, useRef, useState } from "react";

import Rating from "./Rating";
import Price from "./Price";
import { Link } from "react-router-dom/cjs/react-router-dom";


function Book({identify}) {

  // //it was just for demonstration
  // function imageLoading() {
  //   console.log("papa")
  // }

  // {identify.url} = {img.src}

  // in the hooks, img will be the HTML image element
  const [img, setImg] = useState();

  // if we receive notification about perform a React
  //  state update use useRef to only rerender what you need

  const mountedRef = useRef(true)

  // when the elemnet is mounted, 1-create a new image
  // (it ceate a dom image element), 2- set the src coming 
  // from identify element(we programmatically create an image) 
  // 3- onload the image to fired 
  useEffect(() => {
    const image = new Image()
    image.src = identify.url
    image.onload = () => {
// let set time te 3 second
setTimeout(() => {
  if (mountedRef.current) {
    setImg(image)
  }
}, 300);   
    }
    return () => {
      // when the component unmounts
      mountedRef.current = false;
    }
  })


  return (
    <div className="book">

      {img ? 

       (<>
        <Link to={`/books/${identify.id}`}>
        <figure className="book__img--wrapper">
          <img
            src={img.src}
            alt=""
            className="book__img"
            
          />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${identify.id}`} className="book__title--link">
         {identify.title}
        </Link>
      </div>
      <Rating rating={identify.rating} />
      <Price salePrice={identify.salePrice} originalPrice={identify.originalPrice} />
      </>)

       :

       (<>
        <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div> 
        </>)
       
       }

    </div>
  );
}

export default Book;
