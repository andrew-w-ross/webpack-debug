import * as React from "react";
import { render } from "react-dom";

function start() {
	let { Main } = require("./components/Main");
	render(<Main />, document.getElementById("root"));
}

start();

if (module.hot) {
	module.hot.accept("./components/Main", start);
};