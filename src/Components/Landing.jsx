import React from "react";
import  UndrawBooks  from '../assets/Undraw_Books.svg' // to import image


const Landing = () => {
    return(

        <section>
            <div className="header__container">
                <div className="header__description">
                    <h1>America's most awarded online library platform</h1>
                    <h2>Find your dream book with <span className="purple">Timsand</span></h2>
                    <a href="#features">
                        <button className="btn">Browse books</button>
                    </a>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </section>
    )
}
export default Landing;