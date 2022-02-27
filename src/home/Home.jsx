import React from 'react'
import "./home.scss"
import { AcUnit } from "@material-ui/icons";
import Navbar from "../components/navbar/Navbar.jsx";
import Featured from "../components/featured/Featured.jsx"
export const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <Featured type="movie"/>
    </div>
  )
}

