import React,{useContext} from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { UserContext } from '../context/UserContext';

import { NavLink } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
    const {setLightMode, lightMode} = useContext(UserContext)
    const sethandleClick = ()=>{
       setLightMode(!lightMode)
    }

  return (
    <header className=" flex justify-around items-center bg-slate-500 rounded-sm text-white p-4">
      <p>Navlogo</p>
      <nav className="flex flex-row justify-center items-center gap-24 ">
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/notes">Add Note</NavLink>
        {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
        <button onClick={sethandleClick} className=" bg-zinc-700 p-2 rounded-full" to ="">{lightMode?<MdLightMode />:<MdDarkMode />}</button>

        
      </nav>
    </header>
  );
};

export default Navbar;
