# Dogs API
Just playing with restify

## Running
Just run:
```
npm start
```

You can view the demo by running:
```
npm run-script demo
```

## API

### /dogs

#### GET /dogs
  ```
  curl -i -X GET http://localhost:8000/dogs
  ```
#### GET /dogs/:name
  ```
  curl -i -X GET http://localhost:8000/dogs/Sasha
  ```
#### POST /dogs
  ```
  curl -i -X POST http://localhost:8000/dogs -d '{"name": "Sahsa", "color": "black and tan"}'
  ```
#### PUT /dogs/:name
  ```
  curl -i -X PUT http://localhost:8000/dogs/Sasha -d '{"name": "Sahsa", "color": "black and tan"}'
  ```
#### DELETE /dogs/:name
  ```
  curl -i -X DELETE http://localhost:8000/dogs/Saha
  ```
