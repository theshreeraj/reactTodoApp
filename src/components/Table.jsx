const Table = ({data, checkBox, del, disabled, check}) =>{

    return (
<>
    <div className="container-fluid">
          <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Todo</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Checkbox</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((ele,index)=> {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{textDecoration:check?"line-through":""}}>{ele.todo}</td>
                                <td style={{textDecoration:check?"line-through":""}}>{ele.description}</td>
                                <td>{ele.date}</td>
                                <td>{checkBox}</td>
                                <td>
                                    <button disabled={disabled} 
                                    onClick={() => del(index)}
                                    className="btn btn-Danger">
                                        Delete Task
                                    </button>
                                </td>
                            </tr>
                        )
                      })
                    }
                </tbody>
          </table>
    </div>
</>
    )
}
 export default Table;