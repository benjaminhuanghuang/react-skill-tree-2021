


Install
```
  npm i json-server -g
  npm i concurrently -D

  json-server --watch db.json
```

Middleware for json-server
```
  module.exports = (req, res, next) => {
    if (req.method === "POST" && req.path === "/login") {
      if (req.body.username === "ben" && req.body.password === "1234") {
        return res.status(200).json({
          user: { token: "123" },
        });
      }
      else{
        return res.status(400).json({
          'message': 'username or password error'
        })
      }
    }
    next()       
  };  

```

npm script
```
  "start-full": "concurrently \"npm start\" \"npm run mock\"",
  "mock": "json-server __data_mock__/db.json --watch --port 3722 --middleeware ./__data_mock__/middleware.js"
```