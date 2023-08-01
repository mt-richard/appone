import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../redux/actions/fetchStudents"; 
import loadingimg from '../images/loading.gif'
import { InsertModal } from "./modal";
import {closeModal, openModal} from '../redux/reducers/modalSlice'
import { addStudent } from "../redux/actions/saveSlice";

const MyStudents = () => {
    const dispatch= useDispatch();
    const students = useSelector((state) => state.students);
    const {ismodalOpen} = useSelector((state) => state.modal)
    const name = useSelector((state) =>  state.save.name)
    const regno = useSelector((state) =>  state.save.regno)
    const marks = useSelector((state) =>  state.save.marks)

    useEffect(()=>{
        dispatch(fetchStudents());
    },[dispatch]);

    const handleCloseMOdal = () => {
        dispatch(closeModal())
      }
    const handleOpenModal = () =>{
        dispatch(openModal())
      }

    const handleOnchange = (fieldname, e) => {
        const newval = e.target.newValue
        dispatch(addStudent(fieldname, newval))
        
    }
   
      
    const handleSave = () =>{
        dispatch(addStudent({name:name, regno:regno, marks: marks}))
    }
      

    return ( 
        <div className="p-5 py-10 w-full">
             <button onClick={handleOpenModal} className='bg-gray-400 text-white p-2 w-40 rounded my-3'>Add Students</button>
            {ismodalOpen && <InsertModal close={handleCloseMOdal} save={handleSave} handleChange={handleOnchange}/>}

            <h3 className="text-2xl font-bold">List of students</h3>
            {students.loading && <div><img src={loadingimg} alt="Loadding"></img></div>}
            {!students.loading && students.error ? <div>Error: {students.error}...</div> : null}
            {!students.loading && students.mystudents.length ? (
                <div>
                    <table className="w-full text-sm text-left text-gray-800 ">
                        <tr className="bg-gray-300 py-5 rounded-t px-10">
                            <th className="p-3">Names</th>
                            <th className="p-3">Registration Number</th>
                            <th className="p-3">Marks</th>
                        </tr>
                    
                    {students.mystudents.map((std, key) => 

                        <tr key={key} className="border">
                            <td className="p-2" >{std.name}</td>
                            <td className="p-2" >{std.regno}</td>
                            <td className="p-2" >{std.marks}</td>
                        </tr>
                    )}

                        </table>
                    </div>
                
            ) : (
                <div>Nothing around</div>
            )}
        </div>
     );
}
 
export default MyStudents;
