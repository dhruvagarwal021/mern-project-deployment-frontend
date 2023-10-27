//child component of the CreateStudent

import { useEffect, useState } from "react"

export function StudentForm(props)
{
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [rollNo,setRollNo] = useState(props.rollNoValue);

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue,props.emailValue,props.rollNoValue]);
    const arr = [name, email, rollNo]; //[Raj, raj@gmail.com,1]
    //Data available in the child component needs to be transferred to parent component
    //Call back function
   
    const handleClick=()=>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} placeholder="Enter your Name" className="form-control my-3"/>
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your E-mail" className="form-control my-3"/>
            <input defaultValue={props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} placeholder="Enter your Roll No" className="form-control my-3"/>
            <button onClick={handleClick} className="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}
//mx-auto means content automatically comes in the center.