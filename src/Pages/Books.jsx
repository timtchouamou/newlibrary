import React, { useState } from "react";
import Book from "../Components/ui/Book";

// we add data in function and use it as prop
function Books({data: initialBata}) {

    // console.log(data)
    // function getFiveStarBooks() {
    //    const res = data.filter(Book => Book.rating === 5).slice(0, 4)
    //    console.log(res)

    // }
    // getFiveStarBooks();
// we change data to initialData to allow useState work(same name is not good)
    const [data, setData] = useState(initialBata)

    function filterBooks(value) {
        console.log(value)

        //NB: we slice data to avoid mutate during the process of sort

        if(value === 'LOW_TO_HIGH') {
         setData(data.slice().sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }

         if(value === 'HIGH_TO_LOW') {
         setData(data.slice().sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
        }

        
         if(value === 'RATING') {
         setData(data.slice().sort((a,b) => b.rating - a.rating ))
        }

    }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select name="" id="filter" defaultChecked="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                  <option value="DEFAULT">Sort</option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">

                {data
                .map(book =><Book identify={book} key={book.id} /> )}
               
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
