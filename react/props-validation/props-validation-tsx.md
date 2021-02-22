

```
interface SearchPanelProps {
  users: User[],
  param :{
    name:string,
    personId: string,
  },
  // param use type of SearchPanelProps['param']
  setParam: (param: SearchPanelProps['param']) =>void  
}


function SearchPanel({ users, param, setParam }:SearchPanelProps) {


}

```