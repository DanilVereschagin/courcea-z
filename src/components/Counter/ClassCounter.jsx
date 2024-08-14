import React from 'react';

class ClassCounter extends React.Component {
	constructor(props) {
		super();

		this.state = {
			count: 0,
		};
	}

	increment = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	decrement = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	render() {
		return (
			<>
				<div>
					<h1>Count: {this.state.count}</h1>
					<button style={{ marginRight: '10px' }} onClick={this.increment}>
						Increment
					</button>
					<button onClick={this.decrement}>Decrement</button>
				</div>
				<br />
			</>
		);
	}
}

export default ClassCounter;
