import { toast, ToastContainer } from "react-toastify";
import ScannerPage from "./Scanner";

export default function Navbatchi(){
    return <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h6>Bugun tug'ilgan o'quvchilar soni {0}</h6>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>#</th>
                <th>FIO</th>
                <th>Sinfi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Sadullayev Ixtiyor</td>
                <td>5-sinf</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-6">
          <ScannerPage />
        </div>
      </div>
      <ToastContainer />
      
    </div>
}