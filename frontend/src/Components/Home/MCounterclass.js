import React, { useState } from "react";
import axios from "axios";

export default function AddMarking(){

    const[subject,setSubject]=useState("");
    const[assignment,setAssignment]=useState("");
    const[date,setDate]=useState("");
    const[point,setPoint]=useState("");
    const[marks,setMarks]=useState("");

    function sentMarkingData(e){
        e.preventDefault();
       
        /*alert("insert");*/
        const newMarking={
            subject,
            assignment,
            date,
            point,
            marks

        }
        
        axios.post("http://localhost:3100/marking/add",newMarking).then(()=>{
            alert("Marking added")
        }).catch((err)=>{
            alert(err)
        })
    }
        return(
        <div className="container">
            <form onSubmit={sentMarkingData}>
                <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" className="form-control" id="subject"  placeholder="Enter subject" onChange={(e)=>{
                        setSubject(e.target.value);
                    }}></input>
                    
                </div>
                <div className="form-group">
                    <label for="assignment">Assigenment</label>
                    <input type="text" className="form-control" id="assignment" placeholder="Assignment" onChange={(e)=>{
                        setAssignment(e.target.value);
                    }}></input>
                </div>
                <div className="form-check">
                <label for="date">Date of deadline</label>
                    <input type="date" className="form-control" id="date" placeholder="Date of deadline" onChange={(e)=>{
                        setDate(e.target.value);
                    }}></input>
                </div>
                <div className="form-check">
                <label for="point">Marking Point</label>
                    <input type="text" className="form-control" id="point" placeholder="Marking point" onChange={(e)=>{
                        setPoint(e.target.value);
                    }}></input>
                </div>
                <div className="form-check">
                <label for="marks">Marks</label>
                    <input type="text" className="form-control" id="marks" placeholder="Marks" onChange={(e)=>{
                        setMarks(e.target.value);
                    }}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        ) 
    
}
