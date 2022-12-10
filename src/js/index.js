//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application


let tiempo = 0;

setInterval(()=>{
    console.log(tiempo);
    ReactDOM.render(<Home segundos={tiempo}/>, document.querySelector("#app"));
    tiempo++
}, 1000);
