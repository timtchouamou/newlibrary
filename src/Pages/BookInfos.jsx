import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Components/ui/Rating";
import Price from "../Components/ui/Price";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import Book from "../Components/ui/Book";


const BookInfo = ({identify, addToCart, cart}) => {
  const {id} = useParams()
  // console.log(id)
  const bookinfo = identify.find(book => +book.id === +id)
  // console.log(bookinfo)


  function addBookToCart(bookinfo) {
    addToCart(bookinfo)
  }

  function bookExistsOnCart() {
    return cart.find(book => +book.id === +id);
  }

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
                  src={bookinfo.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--decription">
                <h2 className="book__selected--title">
                  {bookinfo.title}
                </h2>
                <Rating rating={bookinfo.rating} />
                <Price salePrice={bookinfo.salePrice} originalPrice={bookinfo.originalPrice} />

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                   <b>This section:</b>  The description about each book posted  on our website. fill free to simple
                   consider this as an example. for your own project contact us at (+1) 240 360 7191, 
                   tim.tchouamou@gmail.com.Address: 469 southampton Dr. silver Spring Maryland, USA
                  </p>
                  <p className="book__summary--para">
                   <b>This section:</b>  The description about each book posted  on our website. fill free to simple
                   consider this as an example. for your own project contact us at (+1) 240 360 7191, 
                   tim.tchouamou@gmail.com.Address: 469 southampton Dr. silver Spring Maryland, USA
                  </p>
                  
                 
                </div>
                {bookExistsOnCart() ?
                (<Link to="/cart" className="book__link">
                <button className="btn">checkout</button>
                </Link>)
                :
                (<button className="btn" onClick={() => addBookToCart(bookinfo)} >add to cart</button>)}
                
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

           {identify.filter(book => book.rating === 5 && +book.id !== +id)
           .map((book) => (
             <Book identify={book} key={book.id} />
            ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
