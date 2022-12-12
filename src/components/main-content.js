import React from "react"

export default function MainContent(){
    return(
        <div className="main-content">
            <div className="main-img">
                <img src={require("../assets/grid.png")} id="grid-img"/>
            </div>
            <h1 id="title">Online Experiences</h1>
            <p id="text"> Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.
            </p>
            <p id="text">Our proprietary technology analyzes hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive 
            parties and property damage.</p>
        </div>
    )
}