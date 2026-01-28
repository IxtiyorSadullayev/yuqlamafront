import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../constants";
import { toast, ToastContainer } from "react-toastify";

const LoginAI = ({ setLoading }) => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  async function loginUser() {
    setLoading(true)
    await axios.post(API_URL + 'users/login', {
      login: login,
      password: password
    })
      .then(res => {
        localStorage.setItem("token", res.data.token)
        setLogin('')
        setPassword('')
        toast.success("Tizimga yo'naltirilayapdi!")
      })
      .catch(err => {
        console.log(err)
        toast.error(err.response.data.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <div className="text-center mb-3">
          <h4 className="fw-bold">Yo‘qlama App</h4>
          <small className="text-muted">Tizimga kirish</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Login</label>
          <input type="text" className="form-control" value={login} onChange={e => setLogin(e.target.value)} placeholder="Login" />
        </div>

        <div className="mb-3">
          <label className="form-label">Parol</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="******" />
        </div>

        <button className="btn btn-primary w-100" onClick={()=> loginUser()}>Kirish</button>
      </div>
      <ToastContainer />

    </div>
  );
};

export default LoginAI;
