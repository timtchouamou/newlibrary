import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom";
import Books from "./Pages/Books";
import { data } from "./data";
import BookInfo from "./Pages/BookInfos";
import Cart from "./Pages/Cart";
import React, { useEffect, useState } from "react";





function App() {
  const [cart, setCart] = useState([]);

  function addToCart(bookinfo) {
  //  setCart([...cart, bookinfo])
   setCart([...cart, {...bookinfo, quantity: 1}]);
  }

  function changeQuantity(bookinfo, quantity) {
   setCart(cart.map(item => 
  //   if (item.id === bookinfo.id) {
  //     return {
  //     ...item,
  //     quantity: +quantity,
  //   }
  // }
  // else{
  //   return item
  // }
   item.id === bookinfo.id
  ?{
  ...item,
  quantity:+quantity,
  }
  : item
   ))

  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
    //[1,2,3,4].filter(num => num !== 3) = [1,2,4]
    console.log("removeItem", item)
  }

    function numberOfItem() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
      return counter;
  }



    useEffect(() => {
      console.log(cart)
    },[cart])

  
  return (
    <Router>
    <div className="App">
    <Nav numberOfItem={numberOfItem()} />
      <Route path="/" exact component={Home} />
      <Route path="/books"  exact render={() => <Books data={data} />} />
      <Route path="/books/:id" render={() => <BookInfo identify={data} addToCart={addToCart} cart={cart} />} />
      <Route path="/cart" render={() => <Cart cartdata={data} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} /> 
    <Footer />
    </div>
    </Router>
  );
}

export default App;
