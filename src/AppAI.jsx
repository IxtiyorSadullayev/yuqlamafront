import { Routes, Route } from "react-router-dom";
import LoginAI from "./Pages/LoginAi";
import Dashboard from "./Pages/DashboardAi";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./constants";
import { ToastContainer } from "react-toastify";

function AppAI() {
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

  if (navbatchi) {
    return <Routes>
      <Route path="/" element={<Dashboard setLoading={setLoading}/>} />
    </Routes>
  }
  return (
    <Routes>
      <Route path="/" element={<LoginAI setLoading={setLoading} />} />

    </Routes>
  );

}

export default AppAI;
