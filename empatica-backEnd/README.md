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
(empaticaenv)$ pip install Flask-PyMongo-flask_cors
```

### API 

- ``` GET /api/all```
    - returns the whole data dataset
- ``` GET /api/{country}```
    - based on the country code, return data related to that country
- ``` GET /api/time?from_ts=xxx&to_ts=xxx```
    - return all the data between 2 timestamp
- ``` POST /api```
    - for adding record to DB



### Example of Dummy data
```json
{"lat":"45.478199", "lon":"9.123852", "app_id":"34945", "downloded":"1498161448"}
```

- lat and lon: are Latitude and Longitude
- app_id: is just a unique 5 digit ID representing app id
- downloaded: is epoch timestamp