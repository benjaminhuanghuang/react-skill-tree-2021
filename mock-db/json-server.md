


Install
```
  npm i json-server -g
  npm i concurrently -D

  json-server --watch db.json
```

npm script
```
  "start-vs-db": "concurrently \"react-scripts start\" \"npm run mock\"",
  "mock": "json-server --watch __mock_db__/db.json --port 3004"
```