
import React from "react"
import { Navbar } from "../NavBar/NavBar"
import './Header.css'
export const Header = () =>{
    return (
        <>
            <header className="header" >
              <h1>REACT 2025</h1>
              <Navbar/>
            </header>
            
        </>
    )
}