# Use react-script vs env variable
this feature is available with react-scripts@0.5.0 and higher.

Create .env.development file at the `root` directory
```
REACT_APP_API_URL=http://localhost:3722
```


Create .env file the `root` directory
```
REACT_APP_API_URL=http://prod-api-server
```

Read the config in app
```
const apiURL = process.env.REACT_APP_API_URL;

```

## Use dotenv
Reference [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

```
npm install dotenv --save
```
Next add the following line to your app.
```
require('dotenv').config()
```
Then create a .env file at the root directory of your application and add the variables to it.

// contents of .env 
```
REACT_APP_API_KEY = 'my-secret-api-key'
```
Finally, add .env to your .gitignore file so that Git ignores it and it never ends up on GitHub.

If you are using `create-react-app` then you only need step 3 and 4 but keep in mind variable needs to start with REACT_APP_ for it to work.