import React from "react";

const Navbar = ({setLoading}) => {
  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <div className="nav-logo "><img className="img-thumbnail w-25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXgnU7FduTcy0Z7GyoXnMnCqLBwMwAXdiFw&s" alt="rsm" /></div>
      <span className="navbar-brand fw-bold">Yo‘qlama App</span>
      <a href="/" className="nav-link text-white cursor-pointer" onClick={()=> {
        setLoading(true)
        localStorage.clear()
        setLoading(false)
      }}>Admin | Chiqish</a>
    </nav>
  );
};

export default Navbar;
