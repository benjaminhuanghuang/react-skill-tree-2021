



```
return (
    <Table pagination={false} dataSource={list} columns={[{
      title:'name',
      dataIndex:'name',
      sorter:(a, b)=> a.name.localeCompare(b.name)
    },{
      title:'owner',
      render(value, project){
        return <span>{users.find((user) => user.id === project.personId)?.name || "Unknow"}</span>
      }
    }]} >  
     
    </Table>
  );
```