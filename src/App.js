import React from "react"
import Navbar from "./components/navbar";
import MainContent from "./components/main-content";
import Card from "./components/card";
import './css/app.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <div className="CardList">
        <Card price="200" name="Ameno"/>
        <Card price="300" name="Mona"/>
        <Card price="7800" name="Fatiha"/>
        <Card price="500" name="Feiza"/>
        <Card price="500" name="Fouzia"/>
        <Card price="500" name="Malika"/>
        <Card price="500"  name="Lena"/>
      </div>
    </div>
  );
}

export default App;
