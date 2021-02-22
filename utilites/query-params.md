
## Convert query object to query params

```
  npm i qs
```

Change 
```
  fetch(`${apiURL}/projects?name=${param.name}&personId=${param.personId}`)
```

To 
```
  import qs from 'qs'
  
  fetch(`${apiURL}/projects?${qs.stringify(queryObj)}`)
```
