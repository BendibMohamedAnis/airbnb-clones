import React from "react"
import '../css/card.css';

const v=["jhob","lina","leeet"];



export default function Card(props){
   
   


    return(
        <div className="card">
            
            <img src={require("../assets/person.png")} id="person-img"/>
            <ul className="rating">
                <li><img src={require("../assets/star.png")} id="star-img"/></li>
                <li>{props.rating}.0 </li>
                <li>(6) - USA </li>
            </ul>
            <small>Life lessons with {props.name}</small>
            <ul className="price">
                <li id="price">From ${props.price}</li>
                <li> / person</li>
            </ul>
        </div>

    )
}
