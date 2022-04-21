import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// import { fa-duotone fa-clock } from '@fortawesome/free-solid-svg-icons'
// import "../styles/index.css";
// import PropTypes from "prop-types";
// const element = <FontAwesomeIcon icon={fa-duotone fa-clock} />

function SimpleCounter() {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		let interval = setInterval(function () {
			setCounter((number) => number + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [counter]);
	console.log(counter);

	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);
	console.log(four, three, two, one);

	return (
		<div className="bigCounter">
			<div className="calender"></div>
			<div className="four">{four % 10}</div>
			<div className="three">{three % 10}</div>
			<div className="two">{two % 10}</div>
			<div className="one">{one % 10}</div>
		</div>
	);
}
// SimpleCounter.propTypes = {
// 	digitFour: PropTypes.number,
// 	digitThree: PropTypes.number,
// 	digitTwo: PropTypes.number,
// 	digitOne: PropTypes.number,
// };

ReactDOM.render(
	<SimpleCounter
	// digitOne={one}
	// digitTwo={two}
	// digitThree={three}
	// digitFour={four}
	/>,
	document.querySelector("#app")
);

export default Home;

// export default function auto() {
// 	const [counter, setcounter] = useState(0);

// useEffect(() =>{
// 	const interval = setInterval(() => {
// 		setcounter((counter) => counter = 1);
// 	}, 1000);

// 	return () => {
// 		clearInterval(interval);
// 	};
// }, []);

// return <div className="Auto">{counter}</div>;

// }
