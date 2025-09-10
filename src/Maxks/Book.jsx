import React from "react";

function Book() {
  return (
    <div className="book">
      <Link to="">
        <figure className="book__img--wrapper">
          <img
            src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="book__img"
          />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="" className="book__title--link">
          Crack the Coding Interview
        </Link>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        <span className="book__price--normal">$49.95</span>$14.95
      </div>
    <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
    </div>
  );
}

export default Book;


/* Book css

.book {
  width: 25%;
  padding: 24px;
  transition: all 300ms ease;
}

.book:hover {
  transform: translateY(-4px);
}

.book__img--wrapper {
  margin-bottom: 8px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
}

.book__img {
  max-height: 320px;
  max-width: 250px;
  transition: all 300ms ease;
}

.book__link {
  color: #242424;
}

.book__title {
  font-size: 20px;
  margin-bottom: 8px;
}

.book__title--link {
  color: #242424;
}

.book__ratings {
  margin-bottom: 8px;
  color: #fabf2a;
}

.book__price--normal {
  text-decoration: line-through;
  padding-right: 6px;
  color: #bfbfbf;


*/ 


/*Book-skeleton css

.book__img--skeleton {
  width: 100%;
  max-width: 250px;
  height: 320px;
  background-color: rgb(204, 204, 204);
  margin-bottom: 8px;
}

.skeleton {
  background-color: rgb(227, 227, 227) !important;
  margin-bottom: 8px;
}

.book__title--skeleton {
  height: 21px;
  width: 100%;
  max-width: 250px;
}

.book__rating--skeleton {
  width: 100px;
  height: 19px;
}

.book__price--skeleton {
  width : 200px;
  height: 19px;
}


*/
