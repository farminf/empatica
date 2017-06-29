# Empatica Dummy Backend

### Requirement
- MongoDB
- Python 3
- virtualenv
- flask
- pymongo

### How to Run

- After Cloning this project, inside the *backend* folder, run:

    ``` bash
    virtualenv -p python3 env
    source env/bin/activate
    (env)$ pip install Flask-PyMongo flask_cors requests
    ```

### API Architecture

- ``` GET /api/all```
    - returns the whole data dataset
- ``` GET /api/time?from_ts={xxx}&to_ts={xxx}```
    - return all the data between 2 timestamp
- ``` POST /api```
    - for adding record to DB (example json as a payload)
- ``` DELETE /api/{app_id}```
    - for deleting one record

#### example of response
```json
{
    "result": [
        {
            "app_id": "34800",
            "country": "Italy",
            "downloaded": "1498425603",
            "lat": "44.497804",
            "lon": "11.344641"
        },
        {
            "app_id": "34801",
            "country": "France",
            "downloaded": "1498477297",
            "lat": "48.8479",
            "lon": "2.4145"
        },
        {
            "app_id": "34802",
            "country": "Germany",
            "downloaded": "1498477343",
            "lat": "48.2196",
            "lon": "11.7333"
        }
    ]
}
```

### Example of Dummy data
```json
{"lat":"45.478199", "lon":"9.123852", "app_id":"34945", "downloded":"1498161448"}
```

- lat and lon: are Latitude and Longitude
- app_id: is just a unique 5 digit ID representing app id
- downloaded: is epoch timestamp

### Country

As soon as new data posted to API, service will call [GEO online API](http://www.geonames.org/) for finding the country based on the coordinates and save the country for each data point too.