# Empatica Dummy Backend

### Requirement
- MongoDB
- Python 3
- virtualenv
- flask
- pymongo

### How to Run

After Cloning this project, inside the *backend* folder, run:

``` bash
virtualenv -p python3 empaticaenv
source empaticaenv/bin/activate
(empaticaenv)$ pip install Flask-PyMongo-flask_cors-requests
```

### API 

- ``` GET /api/all```
    - returns the whole data dataset
- ``` GET /api/time?from_ts={xxx}&to_ts={xxx}```
    - return all the data between 2 timestamp
- ``` POST /api```
    - for adding record to DB
- ``` DELETE /api/{app_id}```
    - for deleting one record



### Example of Dummy data
```json
{"lat":"45.478199", "lon":"9.123852", "app_id":"34945", "downloded":"1498161448"}
```

- lat and lon: are Latitude and Longitude
- app_id: is just a unique 5 digit ID representing app id
- downloaded: is epoch timestamp

### Country

As soon as new data posted to API, service will call GEO online API for finding the country based on the coordinates and save the country for each data point too.