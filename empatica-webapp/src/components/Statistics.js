import React, {Component} from "react";

export default class Statistics extends Component {
	render() {
		return (
			<div >
				<div className='col-sm-5 jumbotron bytime'>
                    <h2>By Time</h2>
                </div>
                <div className='col-sm-5 jumbotron bycountry'>
                    <h2>By Country</h2>
                </div>
			</div>
		);
	}
}