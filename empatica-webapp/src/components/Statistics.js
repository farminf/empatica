import React, {Component} from "react";
import APIHelper from "../util/APIHelper";
import StatisticTime from "./StatisticTime"

export default class Statistics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			points: []
		};
	};

	componentWillMount() {
		APIHelper.getAll()
		.then(function(result){
	    		this.setState({
	    			points : result.data.result	
	    		})
	    	}.bind(this))
	};

	render() {
		var countries = {}
		var newRows = [];
		for (var i in this.state.points) {
			if (countries.hasOwnProperty(this.state.points[i].country)) {
				countries[this.state.points[i].country] = countries[this.state.points[i].country] + 1
			}else{
				countries[this.state.points[i].country] = 1
			}
		}
		for (var key in countries) {
			newRows.push(<tr><td>{key}</td><td>{countries[key]}</td></tr>);
		}
		return (
			<div >
				<div className='col-sm-5 jumbotron bytime'>
                    <h2>By Time</h2>
					<StatisticTime />
                </div>
                <div className='col-sm-5 jumbotron bycountry'>
                    <h2>By Country</h2>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th className="bycountry-th">Country</th>
								
								<th className="bycountry-th">Number</th>
							</tr>
						</thead>
						<tbody>
							
							{newRows}
						</tbody>
					</table>
                </div>
			</div>
		);
	}
}