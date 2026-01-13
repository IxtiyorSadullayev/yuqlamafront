import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Login from "./components/Login";
import ScannerPage from "./components/Scanner";
import { API_URL } from "./constants";
import Navbatchi from "./components/Navbatchi";

function App() {
  const [navbatchi, setNavbatchi] = useState(null)
  const [loading, setLoading] = useState(false)
  async function getCondidate() {
    setLoading(true)
    await axios.get(API_URL + 'users/type', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => setNavbatchi({ userLogin: true }))
      .catch(err => {
        setNavbatchi({ userLogin: false })
        setNavbatchi(null)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getCondidate()
  }, [loading])


  // if (navbatchi == null) {
  //   return <>
  //     <Login loading={loading} setLoading={setLoading} />
  //     <ToastContainer />
  //   </>
  // }

  return (<>
    <Navbatchi />
    <ToastContainer />

  </>
  );
}

export default App;
