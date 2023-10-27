import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props) {
    const { _id, name, email, rollNo } = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://mern-project-devlopment-backend.onrender.com/studentRoute/delete-student/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully !");
                    window.location.reload();
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td className="d-flex justify-content-center">
                <Link className="text-decoration-none text-light me-2" to={"/edit-student/" + _id}>
                    <button className="btn btn-success">
                        Edit
                        {/* /edit-student/ObjectID */}
                    </button>
                </Link>
                <button onClick={handleClick} className="ms-3 btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )

    // or

    // return(
    //     <tr>
    //         <td>{props.obj.name}</td>
    //         <td>{props.obj.email}</td>
    //         <td>{props.obj.rollNo}</td>
    //         <td>
    //             <button className="btn btn-success">
    //                 Edit
    //             </button>
    //             <button onClick={{handleClick}} className="ms-3 btn btn-danger">
    //                 Delete
    //             </button>
    //         </td>
    //     </tr>
    // )

    //Can be done through both the ways.
}

export default StudentListRow;