import React, {Component} from "react";

export default class MapPin extends Component {
	render() {
		return (
			<div className="MapPin">
				{this.props.text}
			</div>
		);
	}
}
