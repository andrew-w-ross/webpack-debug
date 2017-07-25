import * as React from "react";

const DEFAULT_STATE = {
	value: 0
};

export class Adder extends React.Component {
	constructor(props) {
		super();
		this.state = Object.assign({}, DEFAULT_STATE, props);
	}

	add() {
		let { value } = this.state;
		value += 1;
		this.setState({ value });
	}

	render() {
		return (
			<div>
				<h1>Current Values {this.state.value}</h1>
				<button onClick={() => this.add()}>Click Me</button>
			</div>
		);
	}
}