import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({segundos}) => {
	let string = segundos.toString()
	let unidad = string[string.length -1]
	let decena = string[string.length -2]
	let centena = string[string.length -3]
	return (
		<div className="text-center">
			<button className="btn btn-dark">{ centena == undefined? "0": centena}</button>
			<button className="btn btn-dark">{decena==undefined?"0": decena}</button>
			<button className="btn btn-dark">{unidad==undefined?"0": unidad}</button>
		</div>
	);
};

export default Home;
