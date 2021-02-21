


```
  useEffect(()=>{
    fetch(`${apiURL}/projects?name=${param.name}`).then(async response=> {
      if(response.ok){      
        setList(await response.json())
      }
    })
  },[param]);

```