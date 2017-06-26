# api.py
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
CORS(app)

app.config['MONGO_DBNAME'] = 'downloadDB' 
app.config['MONGO_URI'] = 'mongodb://localhost:27017/downloadDB'

mongo = PyMongo(app)

@app.route('/api/all', methods=['GET'])
def get_all_data():
	all_data = mongo.db.data
	output = []
	for s in all_data.find():
		output.append({'lat' : s['lat'], 'lon' : s['lon'], 'app_id' : s['app_id'], 'downloaded' : s['downloaded'], 'country' : s['country']})
	return jsonify({'result' : output})

@app.route('/api/time', methods=['GET'])
def get_data_time():
	data = mongo.db.data
	from_ts = request.args.get("from_ts")
	to_ts = request.args.get("to_ts")
	output = []
	for s in data.find({'downloaded': {'$gte': from_ts, '$lt': to_ts}}):
		output.append({'lat' : s['lat'], 'lon' : s['lon'], 'app_id' : s['app_id'], 'downloaded' : s['downloaded'] ,'country' : s['country']})
	return jsonify({'result' : output})

@app.route('/api', methods=['POST'])
def add_data():
	data = mongo.db.data
	lat = request.json['lat']
	lon = request.json['lon']
	app_id = request.json['app_id']
	ts = request.json['downloaded']
	# before insert, get country and save with country
	url = 'http://ws.geonames.org/countryCode?type=JSON&lat='+ lat +'&lng='+ lon +'&username=farminf'
	r = requests.get(url)
	geo = r.json()
	country_name = geo['countryName']
	data_id = data.insert({'lat': lat, 'lon': lon , 'downloaded':ts , 'app_id':app_id , 'country':country_name})
	new_data = data.find_one({'_id': data_id })
	output = {'id' : new_data['app_id']}
	return jsonify({'result' : output})

@app.route('/api/delete', methods=['DELETE'])
def delete_data():
	data = mongo.db.data
	app_id = request.args.get("app_id")
	deleted_count = data.delete_many({"app_id" : str(app_id)})
	return jsonify({'result' : 'success'})

if __name__ == '__main__':
	app.run(debug=True)

