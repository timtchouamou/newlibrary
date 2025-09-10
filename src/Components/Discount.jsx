import React from "react";
import Book from "./ui/Book";
import { data } from "../data";

function Discount() {
  return (
    <section id="discountes">

      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
           <div className="books">
            {data.map(book => <Book identify={book} key={book.id} />)}                                     
            </div>
        </div>
      </div>

    </section>
  );
}

export default Discount;
