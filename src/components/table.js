import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

export default function TableComponent() {
    const [regionsInfos, setRegionsInfos] = useState([])

    const allInfos=useSelector(state=>state.regionsSlice.allInfos)
    useEffect(() => {
     setRegionsInfos(allInfos)
    }, [allInfos])
  

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
       
          </tr>
        </thead>

        {regionsInfos!==[] && regionsInfos.map(item=>(

        <tbody>
          <tr>
          <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>   
          </tr>
        </tbody>
        ))}

      </Table>
    )
}
