import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Rating from "../Components/ui/Rating";
import Price from "../Components/ui/Price";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import Book from "../Components/ui/Book";


const BookInfo = ({identify}) => {
//   const {id} = useParams()
//   console.log(id)
//   const bookinfo = identify.find(book => +book.id === +id)
//   console.log(bookinfo)

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
                </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
                </Link>
                </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                //   src={bookinfo.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--decription">
                <h2 className="book__selected--title">
                  {/* {bookinfo.title} */}
                </h2>
                {/* <Rating rating={bookinfo.rating} />
                <Price salePrice={bookinfo.salePrice} originalPrice={bookinfo.originalPrice} /> */}

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum quidem, sint, atque labore veritatis laborum non
                    doloribus consequatur nihil itaque adipisci quisquam quae,
                    repellendus in minus inventore cumque aperiam expedita.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum quidem, sint, atque labore veritatis laborum non
                    doloribus consequatur nihil itaque adipisci quisquam quae,
                    repellendus in minus inventore cumque aperiam expedita.
                  </p>
                </div>
                <button className="btn">add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommanded Books</h2>
            </div>
            <div className="books">

           
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;


/*
function App() {
  const [cart, setCart] = useState([]);

  function addToCart(bookinfo) {
    const dupeItem = cart.find((item) => +item.id === +bookinfo.id);

   if (dupeItem) {

    setCart(cart.map((item) => {
      if (item.id === dupeItem.id) {
        return{
          ...item,
          quantity: item.quantity + 1,
        };

      }
      else{
        return item;
      }
    }))

   }

   else{
    setCart([...cart, {...bookinfo, quantity: 1}])
   }
  }

    useEffect(() => {
      console.log(cart)
    },[cart])
*/
