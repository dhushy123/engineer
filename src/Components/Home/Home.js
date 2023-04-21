import React from "react";
import Navigation from "../Navigation/Navigation";
import Background from "../Background/Background";
import CardPage from "../CardPage/CardPage";



const Home =() => {
    return(
        <div>
            <Navigation />
            <Background />
            <CardPage />
            
            <h1>I am the homePage</h1>
        </div>
    )
}

export default Home;