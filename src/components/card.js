import React from "react"
import '../css/card.css';

export default function Card(props){
   
   


    return(
        <div className="card">
            
            <img src={require(`../assets/${props.person}.png`)} id="person-img" alt="person"/>
            <ul className="rating">
                <li><img src={require("../assets/star.png")} id="star-img" alt="star"/></li>
                <li>{props.rating}.0 </li>
                <li>(6) - USA </li>
            </ul>
            <small>Life lessons with {props.name}</small>
            <ul className="price">
                <li id="price">From ${props.price} </li>
                <li>/ person</li>
            </ul>
        </div>

    )
}
