import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";


function publicRoutes(){
    return <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/school" element={<Login />} />
    </Routes>
}


function protectedRoutes(){
    return <Routes >
        <Route path="/dashboard" element={<p>Bu dashboard</p>} />
    </Routes>
}

function privateRoutes(){
    return <Routes >
        <Route path="/scanner" element={<p>Bu scanner</p>} />
    </Routes>
}