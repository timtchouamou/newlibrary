import React from 'react'


import Landing from "../Components/Landing";
import Featured from '../Components/Featured';
import Highlights from '../Components/Highlights';
import Discount from '../Components/Discount';
import Explore from '../Components/Explore';



function Home() {
  return (
    <div>
    <Landing />
    <Highlights />
    <Featured />
    <Discount />
    <Explore />
    </div>
  )
}

export default Home