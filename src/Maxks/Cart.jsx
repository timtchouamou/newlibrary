import React from "react";

function Cart() {
  return (
    <div id="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book_selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              <div className="cart__boby">
                <div className="cart__item">
                  <div className="cart__book">
                    <img
                      src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                      alt=""
                      className="cart__book--img"
                    />
                    <div className="cart__book--info">
                      <span className="cart__book--title">
                        Crack the Coding Interview
                      </span>
                      <div className="cart__book--price">$30</div>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input
                      type="number"
                      min={0}
                      max={99}
                      className="cart__input"
                    />
                  </div>
                  <div className="cart__total">$10.00</div>
                </div>
              </div>
            </div>
             <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>You don't have any books in your cart!</h2>
                <Link t="/books">
                <button className="btn">Browse books</button>
                </Link> 
                </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>

              <div className="total__item total__tax">
                <span>Tax</span>
                <span>$1.00</span>
              </div>
              <div className="total__item total__price">
                <span>Price</span>
                <span>$10.00</span>
              </div>
              <button className="btn btn__checkout no-cursor"
              onClick={() => alert(`Haven't got around to doing this :()`)} >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;


/* 

CSS FOR CART

/* 

  CART 
    

.cart__header {
  background-color: #7342d6;
  margin: 0 24px;
  padding: 8px 16px;
  color: white;
  display: flex;
}

.cart__item {
  margin: 24px;
  display: flex;
  padding-right: 8px;
}

.cart__title {
  margin-bottom: 16px;
}

.cart__book {
  width: 60%;
  display: flex;
}

.cart__quantity {
  width: 40%;
  display: flex;
  align-items: center;
}

.cart__total {
  width: 100%;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
}

.cart__input {
  padding: 8px;
  width: 60px;
}

.cart__book--img {
  width: 100%;
  max-width: 90px;
  max-height: 128px;
}


.cart__book--info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 16px;
}

.cart__book--title {
  font-size: 20px;
  margin-bottom: 16px;
}

.cart__book--price {
  margin-bottom: 16px;
}

.cart__book--remove {
  background-color: transparent;
  color: #cf0000;
  border: none;
  padding-left: 0;
  width: 48px;
}

.total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 24px;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  font-size: 16px;
}

.total__item {
  font-size: 18px;
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.total__sub-total {
  border-top: 2px solid #7342d6;
  padding-top: 24px;
}

.total__price {
  font-weight: bold;
}

.cart__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cart__empty--img {
  padding: 40px;
  max-width: 400px;
}

.btn__checkout {
  width: 100%;
  font-size: 16px;
  padding: 12px 0;
}

*/