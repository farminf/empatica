import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import MapPin from "./MapPin";
import APIHelper from "../util/APIHelper";

export default class MapPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			points: []
		};
	};

	static defaultProps = {
		center: {lat: 48, lng: 11},
		zoom: 0
	};


	_onChildClick = (key, childProps) => {
		
	};
	
	componentWillMount() {
		APIHelper.getAll()
		.then(function(result){
	    		this.setState({
	    			points : result.data.result	
	    		})
	    	}.bind(this))
	};

	componentDidMount() {
		this.updatePointId = setInterval(
			() => this.updatePoints(),
			1000
		);
	}
	
	
	componentWillUnmount() {
    	clearInterval(this.updatePointId);
  	};
	
	updatePoints(){
		APIHelper.getAll()
		.then(function(result){
	    		this.setState({
	    			points : result.data.result	
	    		})
	    	}.bind(this))
	};
	
	render() {
		var points = [];
		for (var i in this.state.points) {
			points.push(<MapPin lat={Number(this.state.points[i].lat)} lng={Number(this.state.points[i].lon)} text={this.state.points[i].app_id} />);
		}
		return (

				<GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					onChildClick={this._onChildClick}
				>
					
				{points}
					
				</GoogleMapReact>

		);
	}
}
