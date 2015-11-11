#! /bin/bash
set -x
curl -i -w '\n\n' -X GET http://localhost:8000/dogs;
curl -i -w '\n\n' -X GET http://localhost:8000/dogs/Sasha;
curl -i -w '\n\n' -X GET http://localhost:8000/dogs/Sharpie;
curl -i -w '\n\n' -X POST http://localhost:8000/dogs -d '{"name":"Laila", "breed":"Schnauzer", "color": "gray"}';
curl -i -w '\n\n' -X GET http://localhost:8000/dogs;
curl -i -w '\n\n' -X PUT http://localhost:8000/dogs/Hildi -d '{"name":"Hildi", "breed":"Dachshund", "status": "hungry", "color": "red"}';
curl -i -w '\n\n' -X GET http://localhost:8000/dogs;
curl -i -w '\n\n' -X PUT http://localhost:8000/dogs/Hugo -d '{"name":"Hugo", "breed":"Dachshund", "color": "red"}';
curl -i -w '\n\n' -X DELETE http://localhost:8000/dogs/Hildi;
curl -i -w '\n\n' -X GET http://localhost:8000/dogs/Hildi;
curl -i -w '\n\n' -X GET http://localhost:8000/dogs;
