import React from "react"
import Navbar from "./components/navbar";
import MainContent from "./components/main-content";
import Card from "./components/card";
import cardData from "./components/cardData";
import './css/app.css';

function App() {

    let  cardDataP =  cardData.map((cardData)=>{
      return <Card name={cardData.name} price={cardData.price} rating={cardData.rating} />
    }    
  )


  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <div className="CardList">
          {cardDataP}
      </div>
    </div>
  );
}

export default App;
