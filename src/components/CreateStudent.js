
import { useState } from "react";
import { StudentForm } from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argumented function
    const getState=(childData)=>{
        //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    //Axios.post("url",data);
    const handleSubmit=()=>{
        const data={name:arr[0],email:arr[1],rollNo:arr[2]};
        Axios.post("https://mern-project-devlopment-backend.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            console.log(res);
            if(res.status === 200)
            {
                alert("Record added Successfully");
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue="" emailValue="" rollNoValue="">
                Create Student
            </StudentForm>
        </form>
    )
}

export default CreateStudent;