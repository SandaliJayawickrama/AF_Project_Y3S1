import React, {useState, useEffect  } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'

export default function Allmarking() {

    const [marking, setMarking] = useState([]);

    useEffect(()=>{
        function getMarking(){
            axios.get("http://localhost:3100/marking").then((res)=>{
                console.log(res.data);
                setMarking(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getMarking();
    },[])
    return(
        <div>
            <hi>details</hi>
            <table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Assigenment</th>
                        <th scope="col">Date of deadline</th>
                        <th scope="col">Point</th>
                        <th scope="col">Marks</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        marking.map(items=>(
                            <tr key={items.markingID}>
                                <th scope="row">{items._id}</th>
                                <th scope="row">{items.subject}</th>
                                <td>{items.assignment}</td>
                                <td>{items.date}</td>
                                <td>{items.point}</td>
                                <td>{items.marks}</td>
                               

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}