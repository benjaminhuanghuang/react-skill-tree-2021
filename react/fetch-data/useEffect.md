


```
  useEffect(()=>{
    fetch(`${apiURL}/projects`).then(async response=> {
      if(response.ok){      
        setList(await response.json())
      }
    })
  },[param]);

```