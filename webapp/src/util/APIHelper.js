var axiosAPI = require('./axiosAPI');

var helpers = { 
	getAll: function(){
		return axiosAPI.get('/all')
				.catch(function (err) {console.warn('Error in getting all point: ', err)})

	},
	getByTime: function(from_ts , to_ts){
		return axiosAPI.get('/time?from_ts='+ from_ts + '&to_ts=' + to_ts )
				.catch(function (err) {console.warn('Error in getting by time: ', err)})
	},

}

module.exports = helpers;