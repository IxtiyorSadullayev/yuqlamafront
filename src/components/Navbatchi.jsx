import { useState } from "react";
import ScannerPage from "./Scanner";


export default function Navbatchi() {
const [key, setKey] = useState(Date.now());

  return <div className="container-fluid">
    <div className="row">
      <div className="col-3"></div>
      <div className="col-lg-6">
        <ScannerPage key={key} />
      </div>
      <div className="col-3"></div>

    </div>

  </div>
}