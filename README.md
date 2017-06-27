### Empatica Demo

*Note: Dedicated README files for Back-End and Front-End are inside their folders.*

### Back-end

- MongoDB as a Database
- API server with Python using Flask and PyMongo

### Web Application

- Web development using ReactJS and Bootstrap
- The app has been initialized using [create-react-app](https://github.com/facebookincubator/create-react-app)


### How to Run
- For backend part:
    - Installing mongodb and running the python script (instructions in the backend folder)

- For Web App: NPM

#### Docker
- the whole project can be run as a docker
    ```bash
     sudo docker-compose build
     sudo docker-compose up
    ```

### Testing the Application

For testing the app it needs to POST some data to backend...
- After running the application, try to post data to path ```/api``` with payload:
```json
{"lat":"48.9333", "lon":"11.2196", "app_id":"34804", "downloaded":"1498547898"}

```
