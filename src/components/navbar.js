import React from "react"

export default function Navbar(){
    return(
        
        <div className="navbar">
            <img src={require("../assets/logo.png")} id="logo"/>
            <h3 id="logo-title">Airbnb</h3>
           
                <ul className="nav-list">
                    <a href="/home">Home</a>
                    <a href="/home">Contact</a>
                    <a href="/home">About</a>
                </ul>
            
        </div>
    )

}