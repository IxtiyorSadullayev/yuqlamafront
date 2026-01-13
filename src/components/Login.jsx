import { useState } from "react"
import { API_URL } from "../constants"
import axios from "axios"
import { toast } from "react-toastify";


export default function Login({loading, setLoading}) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState("")

    async function loginUser(){
        setLoading(true)
        await axios.post(API_URL+'users/login',{
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
            .finally(()=> setLoading(false))
    }


    return <>
        <div className="container ">
            <div className="row my-5">
                <div className="col-3 col-sm-0"></div>
                <div className="col-6 col-sm-12 card">
                    <h1 className="text-center">Autorizatsiya</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Login</label>
                        <input type="text" value={login} onChange={e => setLogin(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Shaxsiy loginingizni kiriting" />
                    </div>
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="inputPassword5" className="form-control" placeholder="Shaxsiy parolingizni kiriting" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                    <div className="container text-center">
                        <button className="btn btn-outline-primary w-25 my-3 " onClick={loginUser} >Kirish

                            {
                                loading ? <div className="spinner-border text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> : ""
                            }
                        </button>
                    </div>
                </div>
                <div className="col-3 col-sm-0"></div>
            </div>
        </div>
    </>
}