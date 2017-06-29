import React, {Component} from "react";
import APIHelper from "../util/APIHelper";
import Datetime from 'react-datetime';
import moment from 'moment';

export default class StatisticTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			points: [],
            m: moment()
		};
        this.onChangeFromDateTime = this.onChangeFromDateTime.bind(this);
        this.onChangeToDateTime = this.onChangeToDateTime.bind(this);
	};
    onChangeFromDateTime(m) {
        this.setState({
            from_value : m.unix()
        })
        this.getByTime();
    };
    onChangeToDateTime(m) {
        this.setState({
            to_value : m.unix()
        })
        this.getByTime();
    };
	componentWillMount() {
		
	};

    getByTime() {
        console.log(this.state.from_value + ' ' + this.state.to_value )
        APIHelper.getByTime(this.state.from_value,this.state.to_value)
		.then(function(result){
	    		this.setState({
	    			points : result.data.result
	    		})
	    	}.bind(this))
    }

	render() {
		var numberOfTimes = this.state.points.length
		return (
			<div >
                <h4>From</h4>
                <Datetime onChange={this.onChangeFromDateTime} />
                <h4>To</h4>
                <Datetime onChange={this.onChangeToDateTime} />
				<h2>The App downloaded <b>{numberOfTimes}</b> times</h2>
			</div>
		);
	}
}