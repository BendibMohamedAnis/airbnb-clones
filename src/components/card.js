import React from "react"
import '../css/card.css';

export default function Card({price,name}){
    const date = new Date()
    const dateH= date.getHours()


    return(
        <div className="card">
            
            <img src={require("../assets/person.png")} id="person-img"/>
            <ul className="rating">
                <li><img src={require("../assets/star.png")} id="star-img"/></li>
                <li>5.0</li>
                <li>(6) - USA </li>
            </ul>
            <small>Life lessons with {name}</small>
            <ul className="price">
                <li id="price">From ${price}</li>
                <li> /person</li>
            </ul>
        </div>

    )
}