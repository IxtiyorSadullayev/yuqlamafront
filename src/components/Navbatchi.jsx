import ScannerPage from "./Scanner";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";



export default function Navbatchi(){
  
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  
  async function getData(){
    await axios.get(API_URL+'users/bugun')
      .then(res => {
        setStudents(res.data.students)
        setTeachers(res.data.teachers)
      })
      .catch(err => console.log(err))
  }

    return <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h6>Bugun tug'ilgan o'qituvchilar soni {teachers.length}</h6>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>FIO</th>
                <th>Kasbi</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student, index)=>{
                  return <tr key={index}>
                <th>{index+1}</th>
                <td>{student.fullname}</td>
                <td>{student.className.classname}</td>
              </tr>
                })
              }
            </tbody>
          </table>
          <hr />
          <h6>Bugun tug'ilgan o'quvchilar soni {students.length}</h6>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>FIO</th>
                <th>Sinfi</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student, index)=>{
                  return <tr key={index}>
                <th>{index+1}</th>
                <td>{student.fullname}</td>
                <td>{student.className.classname}</td>
              </tr>
                })
              }
            </tbody>
          </table>
          <hr />
        </div>
        <div className="col-lg-6">
          <ScannerPage />
        </div>
      </div>
      
    </div>
}