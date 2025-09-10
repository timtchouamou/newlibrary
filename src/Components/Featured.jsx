import React from 'react'
import Book from './ui/Book'
import {data} from '../data'

function Featured() {
    console.log(data)

    // just to pratice
    // function getFIveStarBooks() {
    //     data.filter(book => book.rating === 5).slice(0,4)
    //     console.log(data.filter(book => book.rating === 5).slice(0, 4))
    // }
    // getFIveStarBooks();



  return (
   <section id="features">

    <div className="container">
        <div className="row">
            <h2 className="section__title">
                Featured <span className="purple">Books</span>
            </h2>

            <div className="books">
            {data.
            filter(book => book.rating === 5)
            .slice(0,4)
            .map((book) => (<Book identify={book} key={book.id} />))}                                      
            </div>
        </div>
    </div>

</section>
  )
}

export default Featured